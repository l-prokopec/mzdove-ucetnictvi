import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { availableLessons } from '../../content/courses/payroll/course'
import type { LessonProgress, LessonProgressStatus } from '../../types/course'
import { SkillsChecklist } from './Pages'

const progress = (
  lessonId: string,
  status: LessonProgressStatus,
): LessonProgress => ({
  course_id: 'payroll-cz',
  lesson_id: lessonId,
  content_version: '2026.2',
  status,
  last_score: status === 'not_started' ? null : 60,
  best_score:
    status === 'completed' ? 100 : status === 'in_progress' ? 60 : null,
  attempts_count: status === 'not_started' ? 0 : 1,
  notes: '',
  started_at: null,
  completed_at: status === 'completed' ? '2026-07-11T00:00:00Z' : null,
  last_opened_at: '2026-07-11T00:00:00Z',
  updated_at: '2026-07-11T00:00:00Z',
})

describe('filtr Dovedností', () => {
  it('kombinuje stavy jako multiple-choice a vyčištění obnoví všechny položky', async () => {
    const user = userEvent.setup()
    const rows = [
      progress(availableLessons[0].id, 'in_progress'),
      progress(availableLessons[1].id, 'completed'),
    ]
    const originalRows = structuredClone(rows)
    render(<SkillsChecklist rows={rows} />)
    const items = () => screen.queryAllByTestId('skill-item')

    expect(items()).toHaveLength(availableLessons.length)
    await user.click(screen.getByLabelText('Nezahájeno'))
    expect(items()).toHaveLength(availableLessons.length - 2)
    await user.click(screen.getByLabelText('Nezahájeno'))
    await user.click(screen.getByLabelText('Částečně'))
    expect(items()).toHaveLength(1)
    await user.click(screen.getByLabelText('Dokončeno'))
    expect(items()).toHaveLength(2)
    await user.click(screen.getByLabelText('Nezahájeno'))
    expect(items()).toHaveLength(availableLessons.length)
    await user.click(screen.getByRole('button', { name: 'Vyčistit filtr' }))
    expect(items()).toHaveLength(availableLessons.length)
    expect(rows).toEqual(originalRows)
  })

  it('filtruje jednotlivě dokončené položky a zobrazuje prázdný stav', async () => {
    const user = userEvent.setup()
    const rows = availableLessons.map((lesson) =>
      progress(lesson.id, 'completed'),
    )
    render(<SkillsChecklist rows={rows} />)

    await user.click(screen.getByLabelText('Dokončeno'))
    expect(screen.getAllByTestId('skill-item')).toHaveLength(
      availableLessons.length,
    )
    await user.click(screen.getByLabelText('Dokončeno'))
    await user.click(screen.getByLabelText('Částečně'))
    expect(screen.queryAllByTestId('skill-item')).toHaveLength(0)
    expect(
      screen.getByText('Vybraným stavům neodpovídá žádná dovednost.'),
    ).toBeInTheDocument()
    await user.click(
      screen.getAllByRole('button', { name: 'Vyčistit filtr' })[1],
    )
    expect(screen.getAllByTestId('skill-item')).toHaveLength(
      availableLessons.length,
    )
  })
})
