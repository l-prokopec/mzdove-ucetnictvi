import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { beforeEach, describe, expect, it, vi } from 'vitest'
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

beforeEach(() => {
  vi.clearAllMocks()
  saveProgress.mutateAsync.mockResolvedValue(undefined)
})

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

  it('udrží choice pořadí stabilní v pokusu a po reset generation je změní', async () => {
    const user = userEvent.setup()
    const exercise = {
      id: 'choice-shuffle',
      type: 'single_choice' as const,
      prompt: 'Vyberte odpověď',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'C' },
      ],
      correctOptionId: 'b',
      skillIds: ['test'],
      explanation: 'Správně',
      commonMistake: 'Chyba',
    }
    const random = vi
      .fn<() => number>()
      .mockReturnValueOnce(0.999)
      .mockReturnValueOnce(0.999)
      .mockReturnValue(0)
    const onChange = vi.fn()
    const view = render(
      <ExerciseField
        exercise={exercise}
        lessonId="lesson-a"
        value={undefined}
        onChange={onChange}
        revealed={false}
        attemptId={0}
        choiceRandom={random}
      />,
    )
    const optionOrder = () =>
      screen
        .getAllByRole('radio')
        .map((input) => (input as HTMLInputElement).value)
    const firstOrder = optionOrder()

    await user.click(screen.getAllByRole('radio')[0])
    view.rerender(
      <ExerciseField
        exercise={exercise}
        lessonId="lesson-a"
        value="b"
        onChange={onChange}
        revealed
        locked
        attemptId={0}
        choiceRandom={random}
      />,
    )
    expect(optionOrder()).toEqual(firstOrder)
    expect(random).toHaveBeenCalledTimes(1)

    view.rerender(
      <ExerciseField
        exercise={exercise}
        lessonId="lesson-a"
        value={undefined}
        onChange={onChange}
        revealed={false}
        attemptId={1}
        choiceRandom={random}
      />,
    )
    expect(optionOrder()).not.toEqual(firstOrder)
    expect(
      screen
        .getAllByRole('radio')
        .every((input) => !input.hasAttribute('checked')),
    ).toBe(true)
  })

  it('nepoužije nekompatibilní starý ordering draft jako choice odpověď', () => {
    render(
      <ExerciseField
        exercise={{
          id: 'migrated-choice',
          type: 'single_choice',
          prompt: 'Vyberte odpověď',
          options: [
            { id: 'a', text: 'A' },
            { id: 'b', text: 'B' },
          ],
          correctOptionId: 'b',
          skillIds: ['test'],
          explanation: 'Správně',
          commonMistake: 'Chyba',
        }}
        value={['old-step-a', 'old-step-b']}
        onChange={() => undefined}
        revealed={false}
      />,
    )
    expect(
      screen
        .getAllByRole('radio')
        .every((input) => !(input as HTMLInputElement).checked),
    ).toBe(true)
  })

  it('udrží ordering možnosti stabilní v pokusu a při novém pokusu je promíchá znovu', async () => {
    const user = userEvent.setup()
    const exercise = {
      id: 'ordering',
      type: 'ordering' as const,
      prompt: 'Seřaďte kroky',
      steps: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B' },
        { id: 'c', text: 'C' },
      ],
      correctOrder: ['a', 'b', 'c'],
      skillIds: ['test'],
      explanation: 'Správně',
      commonMistake: 'Chyba',
    }
    const random = vi
      .fn<() => number>()
      .mockReturnValueOnce(0.999)
      .mockReturnValueOnce(0.999)
      .mockReturnValue(0)
    const onChange = vi.fn()
    const view = render(
      <ExerciseField
        exercise={exercise}
        value={undefined}
        onChange={onChange}
        revealed={false}
        attemptId={0}
        orderingRandom={random}
      />,
    )
    const optionIds = () =>
      Array.from(screen.getAllByRole('combobox')[0].querySelectorAll('option'))
        .map((option) => option.value)
        .filter(Boolean)
    const firstOrder = optionIds()
    expect(firstOrder).not.toEqual(exercise.correctOrder)
    expect(screen.getAllByRole('combobox')).toHaveLength(3)

    await user.selectOptions(screen.getAllByRole('combobox')[0], 'b')
    view.rerender(
      <ExerciseField
        exercise={exercise}
        value={['b', '', '']}
        onChange={onChange}
        revealed
        locked
        attemptId={0}
        orderingRandom={random}
      />,
    )
    expect(optionIds()).toEqual(firstOrder)
    expect(random).toHaveBeenCalledTimes(2)
    expect(screen.getByText('Správné pořadí')).toBeInTheDocument()

    view.rerender(
      <ExerciseField
        exercise={exercise}
        value={undefined}
        onChange={onChange}
        revealed={false}
        attemptId={1}
        orderingRandom={random}
      />,
    )
    expect(optionIds()).not.toEqual(firstOrder)
    expect(screen.getAllByRole('combobox')[0]).toHaveValue('')
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
  it('pouhé otevření lekce nevytvoří rozpracovaný progres', () => {
    render(
      <MemoryRouter initialEntries={['/course/lesson/payroll-purpose']}>
        <Routes>
          <Route path="course/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>,
    )

    expect(saveProgress.mutate).not.toHaveBeenCalled()
    expect(saveProgress.mutateAsync).not.toHaveBeenCalled()
  })

  it('pouhá volba odpovědi bez vyhodnocení progres nezmění', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/course/lesson/payroll-purpose']}>
        <Routes>
          <Route path="course/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>,
    )

    await user.click(screen.getAllByRole('radio')[0])
    expect(saveProgress.mutateAsync).not.toHaveBeenCalled()
  })

  it('Resetovat test vyčistí choice volbu v aktuální lekci', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/course/lesson/payroll-purpose']}>
        <Routes>
          <Route path="course/lesson/:lessonId" element={<LessonPage />} />
        </Routes>
      </MemoryRouter>,
    )

    const radio = screen.getAllByRole('radio')[0]
    await user.click(radio)
    expect(radio).toBeChecked()
    await user.click(screen.getByRole('button', { name: 'Resetovat test' }))
    expect(
      screen
        .getAllByRole('radio')
        .every((input) => !(input as HTMLInputElement).checked),
    ).toBe(true)
  })

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
      await user.selectOptions(select, select.options[1].value)
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
    expect(saveProgress.mutateAsync).toHaveBeenLastCalledWith(
      expect.objectContaining({ status: 'in_progress', attempts_count: 1 }),
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
