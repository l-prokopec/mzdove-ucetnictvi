import Decimal from 'decimal.js'
import type { Exercise, MasteryStatus } from '../types/course'

export type ExerciseAnswer =
  | string
  | string[]
  | { text: string; selfRating?: 'failed' | 'partial' | 'mastered' }
export type Evaluation = { correct: boolean; score: number; feedback: string }

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
  let correct = false
  let score: number
  if (exercise.type === 'single_choice')
    correct = answer === exercise.correctOptionId
  if (exercise.type === 'multiple_choice' && Array.isArray(answer)) {
    correct =
      [...answer].sort().join('|') ===
      [...exercise.correctOptionIds].sort().join('|')
  }
  if (exercise.type === 'numeric' && typeof answer === 'string') {
    try {
      correct = new Decimal(answer.replace(',', '.'))
        .minus(exercise.expected)
        .abs()
        .lte(exercise.tolerance)
    } catch {
      correct = false
    }
  }
  if (exercise.type === 'short_text' && typeof answer === 'string') {
    correct = exercise.acceptedAnswers.some(
      (accepted) =>
        normalizeText(answer, exercise.ignoreDiacritics) ===
        normalizeText(accepted, exercise.ignoreDiacritics),
    )
  }
  if (exercise.type === 'ordering' && Array.isArray(answer))
    correct = answer.join('|') === exercise.correctOrder.join('|')
  if (
    exercise.type === 'self_assessed' &&
    typeof answer === 'object' &&
    !Array.isArray(answer)
  ) {
    score =
      answer.selfRating === 'mastered'
        ? 1
        : answer.selfRating === 'partial'
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
