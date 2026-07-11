import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import {
  ContentBlock,
  ExerciseField,
  Flashcards,
  LessonPage,
} from './LessonPage'

const saveProgress = {
  mutate: vi.fn(),
  mutateAsync: vi.fn().mockResolvedValue(undefined),
  isPending: false,
}

vi.mock('../auth/AuthProvider', () => ({
  useAuth: () => ({ client: {}, user: { id: 'test-user' } }),
}))
vi.mock('../progress/useProgress', () => ({
  useProgress: () => ({ data: [], isSuccess: true }),
  useSaveProgress: () => saveProgress,
}))
vi.mock('../../services/progress', () => ({
  saveAttempt: vi.fn().mockResolvedValue(undefined),
  saveFlashcard: vi.fn().mockResolvedValue(undefined),
}))

describe('obsah lekce', () => {
  it('vykreslí praktický příklad s modelovým postupem', () => {
    render(
      <ContentBlock
        block={{
          type: 'example',
          title: 'Praktická situace',
          situation: 'Přišel nový podklad.',
          solution: 'Nejdříve ověřím jeho úplnost.',
        }}
      />,
    )
    expect(screen.getByText('Praktická situace')).toBeInTheDocument()
    expect(
      screen.getByText('Nejdříve ověřím jeho úplnost.'),
    ).toBeInTheDocument()
  })
})

describe('vyhodnocení cvičení', () => {
  it('ukáže správnou i chybně vybranou odpověď a uzamkne volby', () => {
    render(
      <ExerciseField
        exercise={{
          id: 'choice',
          type: 'single_choice',
          prompt: 'Vyberte odpověď',
          options: [
            { id: 'a', text: 'Chybná možnost' },
            { id: 'b', text: 'Správná možnost' },
          ],
          correctOptionId: 'b',
          skillIds: ['test'],
          explanation: 'Vysvětlení',
          commonMistake: 'Chyba',
        }}
        value="a"
        onChange={() => undefined}
        revealed
      />,
    )

    expect(screen.getByText('✓ Správná odpověď')).toBeInTheDocument()
    expect(screen.getByText('× Tvoje odpověď je chybná')).toBeInTheDocument()
    expect(
      screen
        .getAllByRole('radio')
        .every((input) => input.hasAttribute('disabled')),
    ).toBe(true)
  })
})

describe('kartičky', () => {
  it('udržuje volbu a otočení samostatně podle ID kartičky', async () => {
    const user = userEvent.setup()
    render(
      <Flashcards
        lessonId="lesson-a"
        cards={[
          {
            id: 'card-a',
            front: 'Pojem A',
            back: 'Odpověď A',
            explanation: 'A',
            skillIds: [],
          },
          {
            id: 'card-b',
            front: 'Pojem B',
            back: 'Odpověď B',
            explanation: 'B',
            skillIds: [],
          },
        ]}
      />,
    )
    await user.click(screen.getByText('Pojem A'))
    await user.click(screen.getByRole('button', { name: 'Umím' }))
    await user.click(screen.getByText('Pojem B'))

    expect(screen.getByText('Odpověď A')).toBeInTheDocument()
    expect(screen.getByText('Odpověď B')).toBeInTheDocument()
    expect(
      screen
        .getAllByRole('button', { name: 'Umím' })
        .some((button) => button.getAttribute('aria-pressed') === 'true'),
    ).toBe(true)
  })
})

describe('izolace pokusu mezi lekcemi', () => {
  it('po přechodu do další lekce nepřenese odpovědi ani vyhodnocení', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/course/lesson/payroll-purpose']}>
        <Routes>
          <Route path="course/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>,
    )

    const form = screen
      .getByRole('button', { name: 'Vyhodnotit test' })
      .closest('form')!
    for (const radio of form.querySelectorAll<HTMLInputElement>(
      'input[type="radio"]',
    )) {
      if (!form.querySelector(`input[name="${radio.name}"]:checked`))
        await user.click(radio)
    }
    for (const checkbox of form.querySelectorAll<HTMLInputElement>(
      'input[type="checkbox"]',
    )) {
      await user.click(checkbox)
    }
    for (const input of form.querySelectorAll<HTMLInputElement>(
      'input[type="text"], input[inputmode="decimal"]',
    )) {
      await user.type(input, 'test')
    }
    for (const select of form.querySelectorAll<HTMLSelectElement>('select')) {
      await user.selectOptions(select, select.options[0].value)
    }
    const textarea = form.querySelector('textarea')
    if (textarea) {
      await user.type(textarea, 'Moje úvaha')
      await user.click(screen.getByLabelText('Zvládnuto'))
    }
    await user.click(screen.getByRole('button', { name: 'Vyhodnotit test' }))
    await waitFor(() =>
      expect(screen.getByText('Výsledek lekce')).toBeInTheDocument(),
    )

    await user.click(screen.getByRole('link', { name: /Role a odpovědnosti/ }))

    await waitFor(() =>
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: 'Role a odpovědnosti',
        }),
      ).toBeInTheDocument(),
    )
    expect(screen.queryByText('Výsledek lekce')).not.toBeInTheDocument()
    expect(screen.queryByText('✓ Správně')).not.toBeInTheDocument()
    expect(
      screen
        .getAllByRole('radio')
        .some((input) => (input as HTMLInputElement).checked),
    ).toBe(false)
  })
})
