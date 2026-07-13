import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types/course'
import {
  calculateScore,
  checklistStatus,
  evaluateExercise,
  nextReviewDate,
  normalizeExerciseAnswer,
  normalizeText,
  roundMoney,
  scoreBand,
  shuffleOptions,
  shuffleOrderingOptions,
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
    expect(evaluateExercise(exercise, ['a', 'c']).correct).toBe(true)
    expect(evaluateExercise(exercise, ['a']).correct).toBe(false)
    expect(evaluateExercise(exercise, ['a', 'c', 'b']).correct).toBe(false)
    expect(evaluateExercise(exercise, ['a', 'b']).correct).toBe(false)
    expect(evaluateExercise(exercise, ['a', 'a']).correct).toBe(false)
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

describe('prezentační pořadí choice cvičení', () => {
  const options = [
    { id: 'a', text: 'A' },
    { id: 'b', text: 'B' },
    { id: 'c', text: 'C' },
  ]

  it('použije Fisher–Yates bez mutace a zachová přesně množinu možností', () => {
    const original = structuredClone(options)
    const shuffled = shuffleOptions(options, () => 0.999)
    expect(shuffled.map((option) => option.id)).not.toEqual(['a', 'b', 'c'])
    expect(shuffled.map((option) => option.id).sort()).toEqual(['a', 'b', 'c'])
    expect(new Set(shuffled.map((option) => option.id)).size).toBe(3)
    expect(options).toEqual(original)
  })

  it('při resetu bezpečně vynutí pořadí odlišné od předchozího', () => {
    const previous = ['b', 'a', 'c']
    const shuffled = shuffleOptions(options, () => 0.999, previous)
    expect(shuffled.map((option) => option.id)).not.toEqual(previous)
  })

  it('bezpečně obslouží nula, jednu i dvě možnosti', () => {
    expect(shuffleOptions([], () => 0)).toEqual([])
    expect(shuffleOptions([{ id: 'a', text: 'A' }], () => 0)).toEqual([
      { id: 'a', text: 'A' },
    ])
    expect(
      shuffleOptions(
        [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
        ],
        () => 0.999,
      ).map((option) => option.id),
    ).toEqual(['b', 'a'])
  })
})

describe('kompatibilita odpovědi s aktuálním typem cvičení', () => {
  const single: Exercise = {
    ...base,
    type: 'single_choice',
    options: [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
    ],
    correctOptionId: 'b',
  }
  const multiple: Exercise = {
    ...base,
    type: 'multiple_choice',
    options: [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
      { id: 'c', text: 'C' },
    ],
    correctOptionIds: ['a', 'c'],
  }

  it('považuje starý ordering draft u choice otázky za nezodpovězený', () => {
    expect(
      normalizeExerciseAnswer(single, ['step-1', 'step-2']),
    ).toBeUndefined()
    expect(
      normalizeExerciseAnswer(multiple, ['step-1', 'step-2']),
    ).toBeUndefined()
    expect(evaluateExercise(single, ['step-1', 'step-2']).correct).toBe(false)
  })

  it('zachová platná option ID a odmítne neznámé nebo duplicitní ID', () => {
    expect(normalizeExerciseAnswer(single, 'b')).toBe('b')
    expect(normalizeExerciseAnswer(multiple, ['c', 'a'])).toEqual(['c', 'a'])
    expect(normalizeExerciseAnswer(multiple, ['a', 'unknown'])).toBeUndefined()
    expect(normalizeExerciseAnswer(multiple, ['a', 'a'])).toBeUndefined()
  })
})

describe('prezentační pořadí ordering cvičení', () => {
  it('zachová všechny kroky a data, ale nikdy nenabídne správné pořadí', () => {
    const steps = [
      { id: 'a', text: 'A' },
      { id: 'b', text: 'B' },
      { id: 'c', text: 'C' },
    ]
    const original = structuredClone(steps)
    const correctOrder = ['a', 'b', 'c']
    const shuffled = shuffleOrderingOptions(steps, correctOrder, () => 0.999)

    expect(shuffled.map((step) => step.id)).not.toEqual(correctOrder)
    expect([...shuffled.map((step) => step.id)].sort()).toEqual(
      [...correctOrder].sort(),
    )
    expect(new Set(shuffled.map((step) => step.id)).size).toBe(3)
    expect(steps).toEqual(original)
    expect(correctOrder).toEqual(['a', 'b', 'c'])
  })

  it('bezpečně obslouží nula, jeden i dva kroky', () => {
    expect(shuffleOrderingOptions([], [], () => 0)).toEqual([])
    expect(
      shuffleOrderingOptions([{ id: 'a', text: 'A' }], ['a'], () => 0),
    ).toEqual([{ id: 'a', text: 'A' }])
    expect(
      shuffleOrderingOptions(
        [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
        ],
        ['a', 'b'],
        () => 0.999,
      ).map((step) => step.id),
    ).toEqual(['b', 'a'])
  })

  it('vyhodnocuje výhradně zvolená ID proti correctOrder', () => {
    const exercise: Exercise = {
      ...base,
      type: 'ordering',
      steps: [
        { id: 'c', text: 'C' },
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
      ],
      correctOrder: ['a', 'b', 'c'],
    }
    expect(evaluateExercise(exercise, ['a', 'b', 'c']).correct).toBe(true)
    expect(evaluateExercise(exercise, ['c', 'b', 'a']).correct).toBe(false)
  })
})
