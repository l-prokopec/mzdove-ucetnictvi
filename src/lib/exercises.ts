import Decimal from 'decimal.js'
import type { Exercise, MasteryStatus } from '../types/course'

export type ExerciseAnswer =
  | string
  | string[]
  | { text: string; selfRating?: 'failed' | 'partial' | 'mastered' }
export type Evaluation = { correct: boolean; score: number; feedback: string }

type OrderingStep = Extract<Exercise, { type: 'ordering' }>['steps'][number]
type ChoiceOption = Extract<
  Exercise,
  { type: 'single_choice' | 'multiple_choice' }
>['options'][number]

const sameOrder = (left: readonly string[], right: readonly string[]) =>
  left.length === right.length && left.every((id, index) => id === right[index])

export function shuffleOptions(
  options: readonly ChoiceOption[],
  random: () => number = Math.random,
  avoidOrder: readonly string[] = options.map((option) => option.id),
) {
  const shuffled = options.map((option) => ({ ...option }))
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1))
    const current = shuffled[index]
    shuffled[index] = shuffled[target]
    shuffled[target] = current
  }

  if (
    shuffled.length > 1 &&
    sameOrder(
      shuffled.map((option) => option.id),
      avoidOrder,
    )
  ) {
    const first = shuffled[0]
    shuffled[0] = shuffled[1]
    shuffled[1] = first
  }

  return shuffled
}

export function normalizeExerciseAnswer(
  exercise: Exercise,
  answer: ExerciseAnswer | undefined,
): ExerciseAnswer | undefined {
  if (exercise.type === 'single_choice') {
    return typeof answer === 'string' &&
      exercise.options.some((option) => option.id === answer)
      ? answer
      : undefined
  }
  if (exercise.type === 'multiple_choice') {
    if (!Array.isArray(answer)) return undefined
    const optionIds = new Set(exercise.options.map((option) => option.id))
    return answer.every((id) => optionIds.has(id)) &&
      new Set(answer).size === answer.length
      ? answer
      : undefined
  }
  if (exercise.type === 'ordering') {
    if (!Array.isArray(answer)) return undefined
    const stepIds = new Set(exercise.steps.map((step) => step.id))
    return answer.length === exercise.correctOrder.length &&
      answer.every((id) => id === '' || stepIds.has(id))
      ? answer
      : undefined
  }
  if (exercise.type === 'numeric' || exercise.type === 'short_text')
    return typeof answer === 'string' ? answer : undefined
  return typeof answer === 'object' && !Array.isArray(answer)
    ? answer
    : undefined
}

export function shuffleOrderingOptions(
  steps: readonly OrderingStep[],
  correctOrder: readonly string[],
  random: () => number = Math.random,
) {
  const shuffled = steps.map((step) => ({ ...step }))
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1))
    const current = shuffled[index]
    shuffled[index] = shuffled[target]
    shuffled[target] = current
  }

  const matchesCorrectOrder =
    shuffled.length > 1 &&
    shuffled.map((step) => step.id).join('|') === correctOrder.join('|')
  if (matchesCorrectOrder) {
    const differentIndex = shuffled.findIndex(
      (step, index) => index > 0 && step.id !== shuffled[0].id,
    )
    if (differentIndex > 0) {
      const first = shuffled[0]
      shuffled[0] = shuffled[differentIndex]
      shuffled[differentIndex] = first
    }
  }

  return shuffled
}

export const normalizeText = (value: string, ignoreDiacritics = false) => {
  const normalized = value
    .trim()
    .toLocaleLowerCase('cs-CZ')
    .replace(/\s+/g, ' ')
  return ignoreDiacritics
    ? normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : normalized
}

export function evaluateExercise(
  exercise: Exercise,
  answer: ExerciseAnswer,
): Evaluation {
  const normalizedAnswer = normalizeExerciseAnswer(exercise, answer)
  let correct = false
  let score: number
  if (exercise.type === 'single_choice')
    correct = normalizedAnswer === exercise.correctOptionId
  if (exercise.type === 'multiple_choice' && Array.isArray(normalizedAnswer)) {
    const selected = new Set(normalizedAnswer)
    const expected = new Set(exercise.correctOptionIds)
    correct =
      selected.size === expected.size &&
      [...selected].every((id) => expected.has(id))
  }
  if (exercise.type === 'numeric' && typeof normalizedAnswer === 'string') {
    try {
      correct = new Decimal(normalizedAnswer.replace(',', '.'))
        .minus(exercise.expected)
        .abs()
        .lte(exercise.tolerance)
    } catch {
      correct = false
    }
  }
  if (exercise.type === 'short_text' && typeof normalizedAnswer === 'string') {
    correct = exercise.acceptedAnswers.some(
      (accepted) =>
        normalizeText(normalizedAnswer, exercise.ignoreDiacritics) ===
        normalizeText(accepted, exercise.ignoreDiacritics),
    )
  }
  if (exercise.type === 'ordering' && Array.isArray(normalizedAnswer))
    correct = normalizedAnswer.join('|') === exercise.correctOrder.join('|')
  if (
    exercise.type === 'self_assessed' &&
    typeof normalizedAnswer === 'object' &&
    !Array.isArray(normalizedAnswer)
  ) {
    score =
      normalizedAnswer.selfRating === 'mastered'
        ? 1
        : normalizedAnswer.selfRating === 'partial'
          ? 0.5
          : 0
    correct = score === 1
  } else score = correct ? 1 : 0
  return {
    correct,
    score,
    feedback: correct ? exercise.explanation : exercise.commonMistake,
  }
}

export const calculateScore = (scores: number[]) =>
  scores.length === 0
    ? 0
    : Math.round(
        (scores.reduce((sum, value) => sum + value, 0) / scores.length) * 100,
      )
export const scoreBand = (score: number) =>
  score >= 80 ? 'mastered' : score >= 50 ? 'partial' : 'failed'
export const scoreLabel = (score: number) =>
  score >= 80
    ? '✓ Zvládnuto'
    : score >= 50
      ? '~ Částečně zvládnuto'
      : '× Nezvládnuto'

export const checklistStatus = (scores: number[]): MasteryStatus => {
  if (scores.length === 0) return 'not_started'
  const best = Math.max(...scores)
  return best >= 80 ? 'mastered' : 'partial'
}

export const nextReviewDate = (
  rating: 'failed' | 'partial' | 'mastered',
  reviewCount: number,
  from = new Date(),
) => {
  const days =
    rating === 'failed'
      ? 0
      : rating === 'partial'
        ? 2
        : Math.min(7 * Math.max(1, 2 ** reviewCount), 56)
  const result = new Date(from)
  result.setDate(result.getDate() + days)
  return result
}

export const roundMoney = (
  value: string,
  mode: 'half_up_2' | 'whole_half_up',
) =>
  new Decimal(value)
    .toDecimalPlaces(mode === 'half_up_2' ? 2 : 0, Decimal.ROUND_HALF_UP)
    .toFixed(mode === 'half_up_2' ? 2 : 0)
export const sumMoney = (values: string[]) =>
  values.reduce((sum, value) => sum.plus(value), new Decimal(0)).toFixed(2)
