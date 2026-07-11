import { describe, expect, it } from 'vitest'
import type { Exercise } from '../types/course'
import type { CourseOutline } from '../types/course-outline'
import {
  availableLessons,
  buildPayrollCourse,
  payrollCourse,
} from './courses/payroll/course'
import type { RegisteredLessonContent } from './courses/payroll/lesson-content'
import { lessonContentRegistry } from './courses/payroll/lesson-content'
import { payrollPurposeContent } from './courses/payroll/lesson-content/payroll-foundations/payroll-purpose'
import { outlineLessons, payrollOutline } from './courses/payroll/outline'
import { courseOutlineSchema } from './outline-schema'
import { courseSchema } from './schema'

const cloneOutline = () => structuredClone(payrollOutline) as CourseOutline
const availableLessonIds = [
  'payroll-purpose',
  'payroll-roles',
  'payroll-inputs',
  'payroll-month-cycle',
  'payroll-control-trail',
  'dependent-work',
  'employment-parties',
  'labour-relations',
  'equal-treatment',
  'legal-acts-form',
  'employment-contract',
  'fixed-term-probation',
  'employee-personal-data',
  'tax-insurance-onboarding',
  'onboarding-notifications',
  'onboarding-checklist',
]

const outlineWithOnlyFirstAvailable = () => {
  const outline = cloneOutline()
  for (const module of outline.modules) {
    for (const lesson of module.lessons) lesson.status = 'planned'
  }
  outline.modules[0].lessons[0].status = 'available'
  return outline
}

const createCompleteContent = (moduleId: string): RegisteredLessonContent => {
  const exercises: Exercise[] = Array.from({ length: 5 }, (_, index) => ({
    id: `test-question-${index + 1}`,
    type: 'single_choice',
    prompt: `Testovací otázka ${index + 1}`,
    options: [
      { id: 'yes', text: 'Ano' },
      { id: 'no', text: 'Ne' },
    ],
    correctOptionId: 'yes',
    skillIds: ['test-skill'],
    explanation: 'Testovací vysvětlení správné odpovědi.',
    commonMistake: 'Testovací vysvětlení časté chyby.',
  }))

  return {
    moduleId,
    skillIds: ['test-skill'],
    legalValidity: {
      jurisdiction: 'CZ',
      validFrom: '2026-01-01',
      verifiedAt: '2026-07-10',
      note: 'Testovací legislativní metadata.',
    },
    blocks: [{ type: 'paragraph', text: 'Testovací odborný blok.' }],
    flashcards: Array.from({ length: 3 }, (_, index) => ({
      id: `test-card-${index + 1}`,
      front: `Pojem ${index + 1}`,
      back: `Definice ${index + 1}`,
      explanation: 'Testovací vysvětlení kartičky.',
      skillIds: ['test-skill'],
    })),
    exercises,
    sources: [
      {
        title: 'Testovací oficiální zdroj',
        url: 'https://example.gov.cz/test',
        kind: 'official',
      },
    ],
  }
}

describe('master osnova', () => {
  it('má očekávaný stabilizovaný počet modulů a lekcí', () => {
    expect(payrollOutline.modules).toHaveLength(31)
    expect(outlineLessons).toHaveLength(194)
    expect(
      payrollOutline.modules.filter((module) => module.category === 'core'),
    ).toHaveLength(24)
    expect(
      payrollOutline.modules.filter((module) => module.category === 'advanced'),
    ).toHaveLength(7)
  })

  it('má unikátní ID modulů a lekcí', () => {
    const moduleIds = payrollOutline.modules.map((module) => module.id)
    const lessonIds = outlineLessons.map((lesson) => lesson.id)
    expect(new Set(moduleIds).size).toBe(moduleIds.length)
    expect(new Set(lessonIds).size).toBe(lessonIds.length)
  })

  it('validuje všechny prerequisites proti předchozím položkám', () => {
    expect(courseOutlineSchema.parse(payrollOutline)).toBeTruthy()
    const invalid = cloneOutline()
    invalid.modules[1].prerequisites = ['future-or-unknown-module']
    expect(courseOutlineSchema.safeParse(invalid).success).toBe(false)
  })
})

describe('registr plného obsahu', () => {
  it('publikuje právě šestnáct lekcí prvních tří modulů', () => {
    expect(Object.keys(lessonContentRegistry)).toEqual(availableLessonIds)
    expect(availableLessons.map((lesson) => lesson.id)).toEqual(
      availableLessonIds,
    )
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'available'),
    ).toHaveLength(16)
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'planned'),
    ).toHaveLength(178)
    expect(
      availableLessons
        .slice(0, 5)
        .every((lesson) => lesson.moduleId === 'payroll-foundations'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(5, 10)
        .every((lesson) => lesson.moduleId === 'labour-law-basics'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(10)
        .every((lesson) => lesson.moduleId === 'employee-onboarding'),
    ).toBe(true)
    expect(
      payrollCourse.modules
        .slice(3)
        .every((module) => module.status === 'planned'),
    ).toBe(true)
    expect(payrollCourse.modules[0].status).toBe('available')
    expect(payrollCourse.modules[1].status).toBe('available')
    expect(payrollCourse.modules[2].status).toBe('available')
    expect(courseSchema.parse(payrollCourse)).toBeTruthy()
  })

  it('dává každé dostupné lekci úplný obsah a správné moduleId', () => {
    for (const lesson of availableLessons) {
      const content = lessonContentRegistry[lesson.id]
      expect(content).toBeDefined()
      expect(content.moduleId).toBe(lesson.moduleId)
      expect(content.blocks.length).toBeGreaterThanOrEqual(1)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(3)
      expect(content.exercises.length).toBeGreaterThanOrEqual(5)
      expect(content.sources.some((source) => source.kind === 'official')).toBe(
        true,
      )
    }
  })

  it('má u všech oficiálních zdrojů syntakticky platné URL', () => {
    for (const content of Object.values(lessonContentRegistry)) {
      for (const source of content.sources.filter(
        (candidate) => candidate.kind === 'official' && candidate.url,
      )) {
        expect(() => new URL(source.url!)).not.toThrow()
      }
    }
  })

  it('má globálně unikátní ID kartiček a cvičení', () => {
    const contents = Object.values(lessonContentRegistry)
    const flashcardIds = contents.flatMap((content) =>
      content.flashcards.map((card) => card.id),
    )
    const exerciseIds = contents.flatMap((content) =>
      content.exercises.map((exercise) => exercise.id),
    )
    expect(new Set(flashcardIds).size).toBe(flashcardIds.length)
    expect(new Set(exerciseIds).size).toBe(exerciseIds.length)
  })

  it('validuje odkazy správných odpovědí a pořadí kroků', () => {
    for (const content of Object.values(lessonContentRegistry)) {
      for (const exercise of content.exercises) {
        if (exercise.type === 'single_choice') {
          expect(exercise.options.map((option) => option.id)).toContain(
            exercise.correctOptionId,
          )
        }
        if (exercise.type === 'multiple_choice') {
          const optionIds = new Set(exercise.options.map((option) => option.id))
          expect(
            exercise.correctOptionIds.every((id) => optionIds.has(id)),
          ).toBe(true)
        }
        if (exercise.type === 'ordering') {
          const stepIds = exercise.steps.map((step) => step.id).sort()
          expect([...exercise.correctOrder].sort()).toEqual(stepIds)
          expect(new Set(exercise.correctOrder).size).toBe(stepIds.length)
        }
      }
    }
  })

  it('má u všech lekcí druhého modulu legislativní metadata', () => {
    for (const lessonId of availableLessonIds.slice(5, 10)) {
      expect(lessonContentRegistry[lessonId].legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: '2026-01-01',
        verifiedAt: '2026-07-10',
      })
    }
  })

  it('má u všech lekcí třetího modulu úplný obsah a legislativní metadata', () => {
    const expectedValidFrom: Record<string, string> = {
      'employment-contract': '2025-06-01',
      'fixed-term-probation': '2025-06-01',
      'employee-personal-data': '2026-01-01',
      'tax-insurance-onboarding': '2026-01-01',
      'onboarding-notifications': '2026-07-01',
      'onboarding-checklist': '2026-07-01',
    }
    for (const lessonId of availableLessonIds.slice(10)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('employee-onboarding')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(18)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(4)
      expect(content.exercises.length).toBeGreaterThanOrEqual(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(3)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: expectedValidFrom[lessonId],
        verifiedAt: '2026-07-11',
      })
    }
  })

  it('zachovává základní strukturu původní lekce payroll-purpose', () => {
    expect(payrollPurposeContent.skillIds).toEqual([
      'payroll-scope',
      'payroll-input-output',
      'payroll-control-trail',
    ])
    expect(payrollPurposeContent.flashcards).toHaveLength(4)
    expect(payrollPurposeContent.exercises).toHaveLength(6)
    expect(payrollPurposeContent.sources).toHaveLength(5)
    expect(payrollPurposeContent.blocks[0]).toEqual({
      type: 'heading',
      text: 'Co je mzdové účetnictví',
    })
  })

  it('odmítne obsah s neznámým lesson ID', () => {
    expect(() =>
      buildPayrollCourse(payrollOutline, {
        'unknown-lesson': createCompleteContent('payroll-foundations'),
      }),
    ).toThrow(/neznámé ID lekce/)
  })

  it('odmítne moduleId obsahu, které neodpovídá osnově', () => {
    const lessonId = payrollOutline.modules[0].lessons[0].id
    expect(() =>
      buildPayrollCourse(payrollOutline, {
        [lessonId]: createCompleteContent('labour-law-basics'),
      }),
    ).toThrow(/patří v osnově do modulu/)
  })

  it('odmítne available lekci bez registrovaného obsahu', () => {
    const outline = outlineWithOnlyFirstAvailable()
    expect(() => buildPayrollCourse(outline, {})).toThrow(
      /nemá registrovaný plný obsah/,
    )
  })

  it('spojí available lekci s úplným obsahem a validuje výsledný kurz', () => {
    const outline = outlineWithOnlyFirstAvailable()
    const module = outline.modules[0]
    const lesson = module.lessons[0]
    lesson.status = 'available'
    const course = buildPayrollCourse(outline, {
      [lesson.id]: createCompleteContent(module.id),
    })

    expect(course.modules[0].lessons[0].title).toBe(lesson.title)
    expect(course.modules[0].lessons[0].moduleId).toBe(module.id)
    expect(course.modules[0].lessons[0].blocks).toHaveLength(1)
    expect(courseSchema.parse(course)).toBeTruthy()
  })

  it('generuje názvy, pořadí a moduleId pouze z outline', () => {
    expect(payrollCourse.modules.map((module) => module.id)).toEqual(
      payrollOutline.modules.map((module) => module.id),
    )
    expect(payrollCourse.modules[0].lessons[0].title).toBe(
      payrollOutline.modules[0].lessons[0].title,
    )
    expect(payrollCourse.modules[0].lessons[0].moduleId).toBe(
      payrollOutline.modules[0].id,
    )
  })
})
