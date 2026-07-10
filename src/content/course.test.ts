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
import { outlineLessons, payrollOutline } from './courses/payroll/outline'
import { courseOutlineSchema } from './outline-schema'
import { courseSchema } from './schema'

const cloneOutline = () => structuredClone(payrollOutline) as CourseOutline

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
  it('publikuje pouze payroll-purpose a ostatní lekce ponechává planned', () => {
    expect(Object.keys(lessonContentRegistry)).toEqual(['payroll-purpose'])
    expect(availableLessons.map((lesson) => lesson.id)).toEqual([
      'payroll-purpose',
    ])
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'available'),
    ).toHaveLength(1)
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'planned'),
    ).toHaveLength(193)
    expect(payrollCourse.modules[0].status).toBe('available')
    expect(availableLessons[0].flashcards).toHaveLength(4)
    expect(availableLessons[0].exercises).toHaveLength(6)
    expect(availableLessons[0].sources).toHaveLength(5)
    expect(courseSchema.parse(payrollCourse)).toBeTruthy()
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
    const outline = cloneOutline()
    outline.modules[0].lessons[0].status = 'available'
    expect(() => buildPayrollCourse(outline, {})).toThrow(
      /nemá registrovaný plný obsah/,
    )
  })

  it('spojí available lekci s úplným obsahem a validuje výsledný kurz', () => {
    const outline = cloneOutline()
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
