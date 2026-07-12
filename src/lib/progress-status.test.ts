import { describe, expect, it } from 'vitest'
import { payrollCourse } from '../content/courses/payroll/course'
import type {
  CourseModule,
  LessonProgress,
  LessonProgressStatus,
} from '../types/course'
import {
  moduleProgressStatus,
  progressStatusAfterEvaluation,
} from './progress-status'

const module = structuredClone(payrollCourse.modules[0])

const row = (
  lessonId: string,
  status: LessonProgressStatus,
): LessonProgress => ({
  course_id: payrollCourse.id,
  lesson_id: lessonId,
  content_version: payrollCourse.version,
  status,
  last_score: null,
  best_score: null,
  attempts_count: status === 'not_started' ? 0 : 1,
  notes: '',
  started_at: null,
  completed_at: status === 'completed' ? '2026-07-12T00:00:00Z' : null,
  last_opened_at: '2026-07-12T00:00:00Z',
  updated_at: '2026-07-12T00:00:00Z',
})

describe('stav lekce po vyhodnocení', () => {
  it('zahájí lekci po prvním neúspěšném vyhodnocení', () => {
    expect(progressStatusAfterEvaluation('not_started', 20)).toBe('in_progress')
  })

  it('zahájí lekci po vyhodnocení pod hranicí dokončení', () => {
    expect(progressStatusAfterEvaluation('not_started', 79)).toBe('in_progress')
  })

  it('ponechá opakovaně vyhodnocenou rozpracovanou lekci rozpracovanou', () => {
    expect(progressStatusAfterEvaluation('in_progress', 50)).toBe('in_progress')
  })

  it('dokončí lekci při splnění stávající osmdesátiprocentní hranice', () => {
    expect(progressStatusAfterEvaluation('not_started', 80)).toBe('completed')
  })

  it('nikdy nevrátí dokončenou lekci do rozpracovaného stavu', () => {
    expect(progressStatusAfterEvaluation('completed', 0)).toBe('completed')
  })
})

describe('odvozený stav modulu', () => {
  it('je dostupný, pokud žádná dostupná lekce nemá progres', () => {
    expect(moduleProgressStatus(module, [])).toBe('available')
  })

  it.each(['in_progress', 'completed'] as const)(
    'je rozpracovaný, pokud je první lekce %s a ostatní nezačaly',
    (status) => {
      expect(
        moduleProgressStatus(module, [row(module.lessons[0].id, status)]),
      ).toBe('in_progress')
    },
  )

  it('je rozpracovaný při kombinaci dokončených a rozpracovaných lekcí', () => {
    expect(
      moduleProgressStatus(module, [
        row(module.lessons[0].id, 'completed'),
        row(module.lessons[1].id, 'in_progress'),
      ]),
    ).toBe('in_progress')
  })

  it('je dokončený, pokud jsou dokončeny všechny dostupné lekce', () => {
    expect(
      moduleProgressStatus(
        module,
        module.lessons.map((lesson) => row(lesson.id, 'completed')),
      ),
    ).toBe('completed')
  })

  it('ponechá nepublikovaný modul plánovaný bez ohledu na progres', () => {
    const planned = { ...module, status: 'planned' as const }
    expect(
      moduleProgressStatus(
        planned,
        module.lessons.map((lesson) => row(lesson.id, 'completed')),
      ),
    ).toBe('planned')
  })

  it('nevyhodnotí modul bez dostupných lekcí jako dokončený', () => {
    const empty: CourseModule = {
      ...module,
      lessons: [],
      status: 'available',
    }
    expect(moduleProgressStatus(empty, [])).toBe('planned')
  })
})
