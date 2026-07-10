import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types/course'
import {
  calculateScore,
  checklistStatus,
  evaluateExercise,
  nextReviewDate,
  normalizeText,
  roundMoney,
  scoreBand,
} from './exercises'

const base = {
  id: 'x',
  prompt: 'Otázka',
  skillIds: ['skill'],
  explanation: 'Správně',
  commonMistake: 'Chyba',
}

describe('deterministické vyhodnocení', () => {
  it('vyhodnotí single-choice odpověď', () => {
    const exercise: Exercise = {
      ...base,
      type: 'single_choice',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
      ],
      correctOptionId: 'b',
    }
    expect(evaluateExercise(exercise, 'b').correct).toBe(true)
    expect(evaluateExercise(exercise, 'a').correct).toBe(false)
  })

  it('u multiple-choice ignoruje pořadí, ne však chybějící možnost', () => {
    const exercise: Exercise = {
      ...base,
      type: 'multiple_choice',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'C' },
      ],
      correctOptionIds: ['a', 'c'],
    }
    expect(evaluateExercise(exercise, ['c', 'a']).correct).toBe(true)
    expect(evaluateExercise(exercise, ['a']).correct).toBe(false)
  })

  it('vyhodnotí číselnou odpověď včetně desetinné čárky a tolerance', () => {
    const exercise: Exercise = {
      ...base,
      type: 'numeric',
      expected: '100.00',
      tolerance: '0.05',
      unit: 'Kč',
      rounding: 'half_up_2',
      solutionSteps: ['součet'],
    }
    expect(evaluateExercise(exercise, '100,04').correct).toBe(true)
    expect(evaluateExercise(exercise, '100.06').correct).toBe(false)
  })

  it('zaokrouhluje peníze explicitním half-up pravidlem', () => {
    expect(roundMoney('1.005', 'half_up_2')).toBe('1.01')
    expect(roundMoney('2.5', 'whole_half_up')).toBe('3')
  })

  it('normalizuje krátký text, mezery, velikost a volitelně diakritiku', () => {
    expect(normalizeText('  HRUBÁ   MZDA ', true)).toBe('hruba mzda')
  })

  it('počítá skóre a převádí je na tři pásma', () => {
    expect(calculateScore([1, 1, 0, 0.5])).toBe(63)
    expect(scoreBand(49)).toBe('failed')
    expect(scoreBand(50)).toBe('partial')
    expect(scoreBand(80)).toBe('mastered')
  })

  it('odvozuje stav checklistu z nejlepšího výsledku', () => {
    expect(checklistStatus([])).toBe('not_started')
    expect(checklistStatus([40, 79])).toBe('partial')
    expect(checklistStatus([60, 85])).toBe('mastered')
  })

  it('plánuje další opakování deterministicky', () => {
    const from = new Date('2026-07-10T10:00:00Z')
    expect(nextReviewDate('failed', 0, from).toISOString()).toBe(
      '2026-07-10T10:00:00.000Z',
    )
    expect(nextReviewDate('partial', 0, from).toISOString()).toBe(
      '2026-07-12T10:00:00.000Z',
    )
    expect(nextReviewDate('mastered', 2, from).toISOString()).toBe(
      '2026-08-07T10:00:00.000Z',
    )
  })
})
