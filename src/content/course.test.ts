import Decimal from 'decimal.js'
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
  'employment-data-changes',
  'employment-transfer',
  'termination-methods',
  'termination-date',
  'severance-basics',
  'offboarding-process',
  'dpp-purpose',
  'dpc-purpose',
  'agreement-comparison',
  'agreement-time-records',
  'agreement-tax-insurance-inputs',
  'agreement-lifecycle',
  'working-time-concepts',
  'weekly-hours',
  'shift-patterns',
  'rest-breaks',
  'work-time-records',
  'attendance-reconciliation',
  'wage-salary-agreement',
  'remuneration-setting',
  'wage-components',
  'minimum-wage-guaranteed-salary',
  'non-wage-benefits',
  'payday-payment',
  'benefit-classification',
  'non-cash-benefits',
  'benefit-tax-insurance-impact',
  'employer-retirement-contributions',
  'hazardous-work-mandatory-contribution',
  'benefits-payroll-case',
  'overtime-identification',
  'overtime-compensation',
  'holiday-work',
  'night-work',
  'weekend-work',
  'on-call-duty',
  'supplement-overlap',
  'employee-obstacles',
  'public-interest-obstacles',
  'employer-obstacles',
  'obstacle-documents',
  'obstacle-compensation',
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
  it('publikuje právě padesát osm lekcí prvních deseti modulů', () => {
    expect(Object.keys(lessonContentRegistry)).toEqual(availableLessonIds)
    expect(availableLessons.map((lesson) => lesson.id)).toEqual(
      availableLessonIds,
    )
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'available'),
    ).toHaveLength(58)
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'planned'),
    ).toHaveLength(136)
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
        .slice(10, 16)
        .every((lesson) => lesson.moduleId === 'employee-onboarding'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(16, 22)
        .every(
          (lesson) => lesson.moduleId === 'employment-changes-termination',
        ),
    ).toBe(true)
    expect(
      availableLessons
        .slice(22, 28)
        .every((lesson) => lesson.moduleId === 'work-agreements'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(28, 34)
        .every((lesson) => lesson.moduleId === 'working-time'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(34, 40)
        .every((lesson) => lesson.moduleId === 'remuneration-basics'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(40, 46)
        .every(
          (lesson) => lesson.moduleId === 'employee-benefits-other-payments',
        ),
    ).toBe(true)
    expect(
      availableLessons
        .slice(46, 53)
        .every((lesson) => lesson.moduleId === 'overtime-supplements'),
    ).toBe(true)
    expect(
      availableLessons
        .slice(53)
        .every((lesson) => lesson.moduleId === 'work-obstacles'),
    ).toBe(true)
    expect(
      payrollCourse.modules
        .slice(10)
        .every((module) => module.status === 'planned'),
    ).toBe(true)
    expect(payrollCourse.modules[0].status).toBe('available')
    expect(payrollCourse.modules[1].status).toBe('available')
    expect(payrollCourse.modules[2].status).toBe('available')
    expect(payrollCourse.modules[3].status).toBe('available')
    expect(payrollCourse.modules[4].status).toBe('available')
    expect(payrollCourse.modules[5].status).toBe('available')
    expect(payrollCourse.modules[6].status).toBe('available')
    expect(payrollCourse.modules[7].status).toBe('available')
    expect(payrollCourse.modules[8].status).toBe('available')
    expect(payrollCourse.modules[9].status).toBe('available')
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
    for (const lessonId of availableLessonIds.slice(10, 16)) {
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

  it('má u všech lekcí čtvrtého modulu úplný obsah a legislativní metadata', () => {
    const expectedValidFrom: Record<string, string> = {
      'employment-data-changes': '2026-01-01',
      'employment-transfer': '2026-01-01',
      'termination-methods': '2025-06-01',
      'termination-date': '2025-06-01',
      'severance-basics': '2025-06-01',
      'offboarding-process': '2026-04-01',
    }
    for (const lessonId of availableLessonIds.slice(16, 22)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('employment-changes-termination')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(25)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(4)
      expect(content.exercises.length).toBeGreaterThanOrEqual(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(4)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: expectedValidFrom[lessonId],
        verifiedAt: '2026-07-11',
      })
    }
  })

  it('má u všech lekcí pátého modulu úplný obsah a legislativní metadata', () => {
    const expectedValidFrom: Record<string, string> = {
      'dpp-purpose': '2026-01-01',
      'dpc-purpose': '2026-01-01',
      'agreement-comparison': '2026-01-01',
      'agreement-time-records': '2026-01-01',
      'agreement-tax-insurance-inputs': '2026-01-01',
      'agreement-lifecycle': '2026-07-01',
    }
    for (const lessonId of availableLessonIds.slice(22, 28)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('work-agreements')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(30)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(4)
      expect(content.exercises.length).toBeGreaterThanOrEqual(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: expectedValidFrom[lessonId],
        verifiedAt: '2026-07-11',
      })
    }
  })

  it('má u všech lekcí šestého modulu úplný obsah a legislativní metadata', () => {
    for (const lessonId of availableLessonIds.slice(28, 34)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('working-time')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(35)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(4)
      expect(content.exercises.length).toBeGreaterThanOrEqual(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: '2026-01-01',
        verifiedAt: '2026-07-12',
      })
    }
  })

  it('ověřuje klíčová odborná pravidla šestého modulu bez snapshotů', () => {
    const text = JSON.stringify(
      availableLessonIds
        .slice(28)
        .map((lessonId) => lessonContentRegistry[lessonId].blocks),
    )
    for (const expected of [
      '40 hodin',
      '38,75',
      '37,5',
      'Zkrácená stanovená týdenní pracovní doba',
      'Kratší pracovní doba',
      'nezapočítává',
      'Bezpečnostní přestávka',
      '11 hodin',
      '35 hodin',
      'začátek a konec směn',
      'Přítomnost',
      'není automaticky přesčas',
    ]) {
      expect(text).toContain(expected)
    }
  })

  it('má u všech lekcí sedmého modulu úplný obsah a legislativní metadata', () => {
    const expectedValidFrom: Record<string, string> = {
      'wage-salary-agreement': '2026-01-01',
      'remuneration-setting': '2026-01-01',
      'wage-components': '2026-01-01',
      'minimum-wage-guaranteed-salary': '2026-01-01',
      'non-wage-benefits': '2026-01-01',
      'payday-payment': '2025-06-01',
    }
    for (const lessonId of availableLessonIds.slice(34, 40)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('remuneration-basics')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(40)
      expect(content.flashcards.length).toBeGreaterThanOrEqual(4)
      expect(content.exercises.length).toBeGreaterThanOrEqual(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: expectedValidFrom[lessonId],
        verifiedAt: '2026-07-12',
      })
    }
  })

  it('má u všech lekcí osmého modulu úplný obsah a legislativní metadata', () => {
    for (const lessonId of availableLessonIds.slice(40, 46)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('employee-benefits-other-payments')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(45)
      expect(content.flashcards).toHaveLength(4)
      expect(content.exercises).toHaveLength(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: '2026-01-01',
        verifiedAt: '2026-07-12',
      })
    }
  })

  it('má u všech lekcí devátého modulu úplný obsah a legislativní metadata', () => {
    for (const lessonId of availableLessonIds.slice(46, 53)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('overtime-supplements')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(44)
      expect(content.flashcards).toHaveLength(4)
      expect(content.exercises).toHaveLength(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom: '2026-01-01',
        verifiedAt: '2026-07-13',
      })
    }
  })

  it('má u všech lekcí desátého modulu úplný obsah a legislativní metadata', () => {
    for (const lessonId of availableLessonIds.slice(53)) {
      const content = lessonContentRegistry[lessonId]
      expect(content.moduleId).toBe('work-obstacles')
      expect(content.skillIds.length).toBeGreaterThan(0)
      expect(content.blocks.length).toBeGreaterThanOrEqual(47)
      expect(content.flashcards).toHaveLength(4)
      expect(content.exercises).toHaveLength(6)
      expect(
        content.sources.filter((source) => source.kind === 'official').length,
      ).toBeGreaterThanOrEqual(5)
      expect(content.legalValidity).toMatchObject({
        jurisdiction: 'CZ',
        validFrom:
          lessonId === 'employee-obstacles' ? '2025-06-01' : '2026-01-01',
        verifiedAt: '2026-07-13',
      })
    }
  })

  it('ověřuje klíčová odborná pravidla desátého modulu bez snapshotů', () => {
    const text = JSON.stringify(
      availableLessonIds
        .slice(53)
        .map((lessonId) => lessonContentRegistry[lessonId].blocks),
    )
    for (const expected of [
      'nejbližšího způsobilého zařízení',
      'dva dny',
      'pět dalších dnů',
      'pouze jednomu rodinnému příslušníkovi',
      'nejvýše 4 dny s náhradou',
      'nejvýše 2 dny bez náhrady',
      'považuje za vyčerpaný celý den',
      'Veřejná funkce',
      'občanské povinnosti',
      'Jiné úkony v obecném zájmu',
      '24 hodin',
      '48 hodin',
      '96 hodin',
      '12 směn',
      'tři týdny',
      '276,90 Kč',
      '80 %',
      '60 %',
      '100 %',
      'částečné nezaměstnanosti',
      'platové sféře',
      'DPP a DPČ',
      'Stejný čas nelze současně vykázat jako práci a překážku',
      'Minimalizace osobních údajů',
      'auditní stopu',
    ]) {
      expect(text).toContain(expected)
    }
  })

  it('module 10 calculation exercises are independent from worked examples', () => {
    const contents = availableLessonIds
      .slice(53)
      .map((lessonId) => lessonContentRegistry[lessonId])
    const exercises = contents.flatMap((content) => content.exercises)
    const findShortText = (id: string) => {
      const exercise = exercises.find((candidate) => candidate.id === id)
      if (!exercise || exercise.type !== 'short_text') {
        throw new Error(`Missing short-text exercise ${id}`)
      }
      return exercise
    }

    const employee = lessonContentRegistry['employee-obstacles']
    const employeeText = JSON.stringify(employee.blocks)
    const employeeExercise = findShortText('employee-obstacles-exercise-05')
    expect(employeeText).toContain('2,5 hodiny')
    expect(employeeExercise.prompt).toContain('10:20 do 13:05')
    expect(employeeExercise.prompt).not.toContain('9:10–11:40')
    expect(employeeExercise.acceptedAnswers).toContain('2,75 hodiny')

    const publicInterest = lessonContentRegistry['public-interest-obstacles']
    const publicInterestText = JSON.stringify(publicInterest.blocks)
    const publicInterestExercise = findShortText(
      'public-interest-obstacles-exercise-05',
    )
    expect(publicInterestText).toContain('40 × 276,90 = 11 076 Kč')
    expect(publicInterestExercise.prompt).toContain('32 hodin')
    expect(publicInterestExercise.prompt).toContain('260 Kč')
    expect(publicInterestExercise.acceptedAnswers).toContain('8 320 Kč')
    expect(publicInterestExercise.acceptedAnswers).not.toContain('11 076 Kč')

    const employer = lessonContentRegistry['employer-obstacles']
    const employerText = JSON.stringify(employer.blocks)
    const employerExercise = findShortText('employer-obstacles-exercise-05')
    for (const result of ['960 Kč', '1 008 Kč', '1 120 Kč', '3 900 Kč']) {
      expect(employerText).toContain(result)
    }
    expect(employerExercise.prompt).toContain('7,25 hodiny')
    expect(employerExercise.prompt).toContain('310 Kč')
    expect(employerExercise.acceptedAnswers).toContain('1 798 Kč')
    for (const input of ['4 × 300', '6 × 280', '3,5 × 320', '20 × 300']) {
      expect(employerExercise.prompt).not.toContain(input)
    }

    const documents = lessonContentRegistry['obstacle-documents']
    const documentsText = JSON.stringify(documents.blocks)
    const documentsExercise = findShortText('obstacle-documents-exercise-05')
    expect(documentsText).toContain('8:00–16:00')
    expect(documentsExercise.prompt).toContain('9:00–17:30')
    expect(documentsExercise.acceptedAnswers).toContain('3 hodiny 20 minut')

    const compensation = lessonContentRegistry['obstacle-compensation']
    const compensationText = JSON.stringify(compensation.blocks)
    for (const result of [
      '955,50 Kč',
      '775 Kč',
      '1 342 Kč',
      '1 218 Kč',
      '907,50 Kč',
      '4 914 Kč',
      '1 008 Kč',
      '4 500 Kč',
    ]) {
      expect(compensationText).toContain(result)
    }
    const compensationExercise = findShortText(
      'obstacle-compensation-exercise-05',
    )
    for (const input of ['304 Kč', '2,25 hodiny', '6,5 hodiny', '4 hodiny']) {
      expect(compensationExercise.prompt).toContain(input)
    }
    expect(compensationExercise.acceptedAnswers).toContain('3 480,80 Kč')
    expect(
      JSON.stringify({
        blocks: compensation.blocks,
        flashcards: compensation.flashcards,
      }),
    ).not.toContain('3 480,80 Kč')

    expect(new Decimal(4.5).minus(2.75).toString()).toBe('1.75')
    expect(new Decimal(32).times(260).toString()).toBe('8320')
    expect(new Decimal(7.25).times(310).times(0.8).toString()).toBe('1798')
    expect(new Decimal(5).minus(3.25).toString()).toBe('1.75')
    const total = new Decimal(2.25)
      .times(304)
      .plus(new Decimal(6.5).times(304).times(0.8))
      .plus(new Decimal(4).times(304))
    expect(total.toString()).toBe('3480.8')
  })

  it('ověřuje klíčová odborná pravidla devátého modulu bez snapshotů', () => {
    const text = JSON.stringify(
      availableLessonIds
        .slice(46, 53)
        .map((lessonId) => lessonContentRegistry[lessonId].blocks),
    )
    for (const expected of [
      'příkaz zaměstnavatele nebo s jeho souhlasem',
      'kratší pracovní dobu',
      '8 hodin',
      '150 hodin',
      '25 %',
      '50 %',
      '100 %',
      '22:00–6:00',
      '20 %',
      '10 %',
      '25 %',
      'pracovní pohotovost',
      '3 004 Kč',
      '2 hodiny',
    ]) {
      expect(text).toContain(expected)
    }
  })

  it('module 9 calculation exercises use inputs independent from worked examples', () => {
    const moduleLessonIds = availableLessonIds.slice(46, 53)
    const contents = moduleLessonIds.map(
      (lessonId) => lessonContentRegistry[lessonId],
    )
    const exercises = contents.flatMap((content) => content.exercises)
    const cards = contents.flatMap((content) => content.flashcards)
    const exerciseIds = exercises.map((exercise) => exercise.id)
    const cardIds = cards.map((card) => card.id)

    expect(new Set(exerciseIds).size).toBe(exerciseIds.length)
    expect(new Set(cardIds).size).toBe(cardIds.length)

    const findExercise = (id: string) => {
      const exercise = exercises.find((candidate) => candidate.id === id)
      if (!exercise) throw new Error(`Missing exercise ${id}`)
      return exercise
    }
    const findCard = (id: string) => {
      const card = cards.find((candidate) => candidate.id === id)
      if (!card) throw new Error(`Missing card ${id}`)
      return card
    }
    const correctOptionText = (id: string) => {
      const exercise = findExercise(id)
      if (exercise.type !== 'single_choice') {
        throw new Error(`${id} is not a single-choice exercise`)
      }
      return exercise.options.find(
        (option) => option.id === exercise.correctOptionId,
      )?.text
    }

    const overlapCalculation = findExercise('supplement-overlap-exercise-05')
    expect(overlapCalculation.type).toBe('short_text')
    if (overlapCalculation.type !== 'short_text') return
    expect(overlapCalculation.prompt).toContain('270 Kč')
    expect(overlapCalculation.prompt).toContain('340 Kč')
    expect(overlapCalculation.prompt).not.toContain('modelový případ')
    expect(overlapCalculation.prompt).not.toContain('26. prosince 22:00')
    expect(overlapCalculation.acceptedAnswers).toContain('2 506 Kč')
    expect(overlapCalculation.acceptedAnswers).not.toContain('3 004 Kč')

    const overlapCard = findCard('supplement-overlap-card-03')
    const overlapCardText = JSON.stringify(overlapCard)
    expect(overlapCardText).not.toContain('3 004 Kč')
    expect(overlapCardText).toContain('náhradním volnu')
    expect(overlapCardText).toContain('noční nebo víkendový příplatek')

    expect(correctOptionText('overtime-compensation-exercise-01')).toBe(
      '1 200,50 Kč.',
    )
    expect(correctOptionText('holiday-work-exercise-04')).toBe('1 749 Kč.')
    expect(correctOptionText('night-work-exercise-04')).toBe('155,40 Kč.')
    expect(correctOptionText('weekend-work-exercise-04')).toBe('185,90 Kč.')
    expect(correctOptionText('on-call-duty-exercise-01')).toBe('220,50 Kč.')
    expect(correctOptionText('supplement-overlap-exercise-06')).toBe('208 Kč.')

    const workedExampleText = JSON.stringify(
      lessonContentRegistry['supplement-overlap'].blocks,
    )
    expect(workedExampleText).toContain('3 004 Kč')
    expect(
      JSON.stringify({
        blocks: lessonContentRegistry['supplement-overlap'].blocks,
        flashcards: lessonContentRegistry['supplement-overlap'].flashcards,
      }),
    ).not.toContain('2 506 Kč')

    expect(new Decimal(40).minus(37.5).toString()).toBe('2.5')
    expect(new Decimal(8).minus(6.5).toString()).toBe('1.5')
    expect(new Decimal(150).minus(136.5).toString()).toBe('13.5')
    expect(
      new Decimal(3.5)
        .times(265)
        .plus(new Decimal(3.5).times(312).times(0.25))
        .toString(),
    ).toBe('1200.5')
    expect(new Decimal(4.5).times(336).times(0.5).toString()).toBe('756')
    expect(new Decimal(104).minus(90).toString()).toBe('14')
    expect(new Decimal(6.5).times(286).toString()).toBe('1859')
    expect(new Decimal(5.5).times(318).toString()).toBe('1749')
    expect(new Decimal(3.5).minus(0.5).toString()).toBe('3')
    expect(new Decimal(5.75).minus(0.5).toString()).toBe('5.25')
    expect(new Decimal(5.25).times(296).times(0.1).toString()).toBe('155.4')
    expect(new Decimal(4.75).times(328).times(0.2).toString()).toBe('311.6')
    expect(new Decimal(5.5).minus(0.5).toString()).toBe('5')
    expect(new Decimal(6.5).times(286).times(0.1).toString()).toBe('185.9')
    expect(new Decimal(7.25).times(344).times(0.25).toString()).toBe('623.5')
    expect(new Decimal(9).minus(1.25).minus(0.75).toString()).toBe('7')
    expect(new Decimal(7).times(315).times(0.1).toString()).toBe('220.5')
    expect(new Decimal(11.5).minus(1.25).minus(2).toString()).toBe('8.25')
    expect(new Decimal(6.75).times(308).times(0.1).toString()).toBe('207.9')
    expect(new Decimal(3.75).times(336).toString()).toBe('1260')

    const overlapTotal = new Decimal(5)
      .times(270)
      .plus(new Decimal(5).times(340).times(0.25))
      .plus(new Decimal(5).times(340).times(0.1))
      .plus(new Decimal(1.5).times(340).times(0.1))
      .plus(new Decimal(1.5).times(340))
    expect(overlapTotal.toString()).toBe('2506')
    expect(new Decimal(8).minus(1.5).times(320).times(0.1).toString()).toBe(
      '208',
    )
  })

  it('module 8 open calculation exercise is independent from the worked example', () => {
    const content = lessonContentRegistry['benefits-payroll-case']
    const exercise = content.exercises.find(
      (candidate) => candidate.id === 'benefits-payroll-case-exercise-05',
    )
    const card = content.flashcards.find(
      (candidate) => candidate.id === 'benefits-payroll-case-card-04',
    )

    expect(exercise).toBeDefined()
    expect(exercise?.type).toBe('short_text')
    if (!exercise || exercise.type !== 'short_text') return

    for (const input of [
      '1 800 Kč',
      '3 200 Kč',
      '2 600 Kč',
      '2 900 Kč',
      '46 500 Kč',
      '22 900 Kč',
      '48 600 Kč',
    ]) {
      expect(exercise.prompt).toContain(input)
    }
    expect(exercise.prompt).not.toContain(
      'Kolik činí celková zdanitelná benefitní část případu?',
    )
    expect(exercise.acceptedAnswers).toContain('5 049,50 Kč')
    expect(exercise.acceptedAnswers).not.toContain('4 516,50 Kč')

    expect(card).toBeDefined()
    const cardText = JSON.stringify(card)
    expect(cardText).not.toContain('4 516,50 Kč')
    expect(cardText).not.toContain('5 049,50 Kč')
    expect(cardText).toContain('zdanitelné a nadlimitní části')

    const teachingText = JSON.stringify({
      blocks: content.blocks,
      flashcards: content.flashcards,
    })
    expect(JSON.stringify(content.blocks)).toContain('4 516,50 Kč')
    expect(teachingText).not.toContain('5 049,50 Kč')

    const healthRemaining = new Decimal(48967).minus(46500)
    const healthTaxable = new Decimal(3200).minus(healthRemaining)
    const leisureRemaining = new Decimal('24483.50').minus(22900)
    const leisureTaxable = new Decimal(2600).minus(leisureRemaining)
    const retirementRemaining = new Decimal(50000).minus(48600)
    const retirementTaxable = new Decimal(2900).minus(retirementRemaining)
    const total = new Decimal(1800)
      .plus(healthTaxable)
      .plus(leisureTaxable)
      .plus(retirementTaxable)

    expect(healthRemaining.toString()).toBe('2467')
    expect(healthTaxable.toString()).toBe('733')
    expect(leisureRemaining.toString()).toBe('1583.5')
    expect(leisureTaxable.toString()).toBe('1016.5')
    expect(retirementRemaining.toString()).toBe('1400')
    expect(retirementTaxable.toString()).toBe('1500')
    expect(total.toString()).toBe('5049.5')

    expect(payrollCourse.modules).toHaveLength(31)
    expect(outlineLessons).toHaveLength(194)
    expect(availableLessons).toHaveLength(58)
    expect(
      outlineLessons.filter((lesson) => lesson.status === 'planned'),
    ).toHaveLength(136)
  })

  it('ověřuje klíčová odborná pravidla osmého modulu bez snapshotů', () => {
    const text = JSON.stringify(
      availableLessonIds
        .slice(40, 46)
        .map((lessonId) => lessonContentRegistry[lessonId].blocks),
    )
    for (const expected of [
      '48 967 Kč',
      '24 483,50 Kč',
      'nepeněžní',
      'nadlimitní část',
      '50 000 Kč',
      'povinný příspěvek',
      '4 %',
      'tři směny',
      '1,25 směny',
      'DIP',
      '4 516,50 Kč',
    ]) {
      expect(text).toContain(expected)
    }
  })

  it('ověřuje klíčová odborná pravidla sedmého modulu bez snapshotů', () => {
    const text = JSON.stringify(
      availableLessonIds
        .slice(34)
        .map((lessonId) => lessonContentRegistry[lessonId].blocks),
    )
    for (const expected of [
      'Mzda',
      'Plat',
      'Odměna z dohody',
      'sjednanou mzdu',
      'před začátkem výkonu práce',
      'nemzdové',
      '22 400 Kč',
      '134,40 Kč',
      '138,80 Kč',
      '143,40 Kč',
      '26 880 Kč',
      '31 360 Kč',
      '35 840 Kč',
      '4,70 Kč',
      'bezhotovost',
      'výplatní termín',
      'výplatní doklad',
      'zlomky hodin',
    ]) {
      expect(text).toContain(expected)
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
