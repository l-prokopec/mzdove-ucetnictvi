import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import {
  availableLessons,
  findLesson,
  payrollCourse,
} from '../../content/courses/payroll/course'
import {
  calculateScore,
  evaluateExercise,
  scoreBand,
  scoreLabel,
  type ExerciseAnswer,
} from '../../lib/exercises'
import type {
  Exercise,
  Flashcard,
  LessonBlock,
  LessonProgress,
} from '../../types/course'
import { saveAttempt, saveFlashcard } from '../../services/progress'
import { useAuth } from '../auth/AuthProvider'
import { useProgress, useSaveProgress } from '../progress/useProgress'
import {
  isLessonSection,
  lessonSectionPath,
  lessonSections,
  type LessonSection,
} from '../../lib/lesson-navigation'

export function ContentBlock({ block }: { block: LessonBlock }) {
  if (block.type === 'heading') return <h2>{block.text}</h2>
  if (block.type === 'paragraph') return <p>{block.text}</p>
  if (block.type === 'definition')
    return (
      <dl className="definition">
        <dt>{block.term}</dt>
        <dd>{block.definition}</dd>
      </dl>
    )
  if (block.type === 'list')
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  if (block.type === 'notice')
    return (
      <aside className={`lesson-notice lesson-notice--${block.tone}`}>
        {block.text}
      </aside>
    )
  if (block.type === 'example')
    return (
      <div className="example">
        <div className="eyebrow">{block.title}</div>
        <p>{block.situation}</p>
        <strong>Modelový postup</strong>
        <p>{block.solution}</p>
      </div>
    )
  return (
    <div className="summary">
      <strong>Po této lekci</strong>
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

type FlashcardState = Record<
  string,
  { open: boolean; rating?: 'failed' | 'partial' | 'mastered' }
>

export function Flashcards({
  lessonId,
  cards,
}: {
  lessonId: string
  cards: Flashcard[]
}) {
  const { client, user } = useAuth()
  const [states, setStates] = useState<FlashcardState>({})
  const [message, setMessage] = useState('')
  const rate = async (
    id: string,
    rating: 'failed' | 'partial' | 'mastered',
  ) => {
    setStates((current) => ({
      ...current,
      [id]: { open: rating === 'mastered', rating },
    }))
    setMessage('Ukládám…')
    try {
      await saveFlashcard(client, user!.id, {
        id,
        rating,
      })
      setMessage('Uloženo')
    } catch {
      setMessage('Uložení se nezdařilo')
    }
  }
  return (
    <section
      id={lessonSections.flashcards}
      className="lesson-section lesson-section--target"
      tabIndex={-1}
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">Aktivní vybavování</div>
          <h2>Studijní kartičky</h2>
        </div>
        <div>
          <span role="status">{message}</span>
          <button
            type="button"
            className="button button--quiet"
            onClick={() => {
              setStates({})
              setMessage('Kartičky byly resetovány')
            }}
          >
            Resetovat kartičky
          </button>
        </div>
      </div>
      <div className="flashcards">
        {cards.map((card) => {
          const state = states[card.id] ?? { open: false }
          return (
            <article
              key={card.id}
              className={state.open ? 'flashcard is-open' : 'flashcard'}
            >
              <button
                type="button"
                onClick={() =>
                  setStates((current) => ({
                    ...current,
                    [card.id]: { ...state, open: !state.open },
                  }))
                }
                aria-expanded={state.open}
              >
                <span>{state.open ? 'Odpověď' : 'Pojem'}</span>
                <strong>{state.open ? card.back : card.front}</strong>
                <small>
                  {state.open ? card.explanation : 'Kliknutím odkryjte odpověď'}
                </small>
              </button>
              {(state.open || state.rating) && (
                <div
                  className="rating"
                  aria-label={`Sebehodnocení kartičky ${card.front}`}
                >
                  <button
                    type="button"
                    aria-pressed={state.rating === 'failed'}
                    className={state.rating === 'failed' ? 'is-selected' : ''}
                    onClick={() => void rate(card.id, 'failed')}
                  >
                    Neumím
                  </button>
                  <button
                    type="button"
                    aria-pressed={state.rating === 'partial'}
                    className={state.rating === 'partial' ? 'is-selected' : ''}
                    onClick={() => void rate(card.id, 'partial')}
                  >
                    Částečně
                  </button>
                  <button
                    type="button"
                    aria-pressed={state.rating === 'mastered'}
                    className={state.rating === 'mastered' ? 'is-selected' : ''}
                    onClick={() => void rate(card.id, 'mastered')}
                  >
                    Umím
                  </button>
                </div>
              )}
            </article>
          )
        })}
      </div>
      <small>
        Výsledky kartiček z lekce {lessonId} se ukládají samostatně a určují
        datum dalšího opakování.
      </small>
    </section>
  )
}

export function ExerciseField({
  exercise,
  value,
  onChange,
  revealed,
  locked = revealed,
}: {
  exercise: Exercise
  value: ExerciseAnswer | undefined
  onChange: (value: ExerciseAnswer) => void
  revealed: boolean
  locked?: boolean
}) {
  const optionClass = (correct: boolean, selected: boolean) => {
    if (!revealed) return 'option'
    if (correct) return 'option option--correct'
    return selected ? 'option option--wrong' : 'option'
  }
  if (exercise.type === 'single_choice')
    return (
      <fieldset>
        <legend>{exercise.prompt}</legend>
        {exercise.options.map((option) => {
          const selected = value === option.id
          const correct = option.id === exercise.correctOptionId
          return (
            <label className={optionClass(correct, selected)} key={option.id}>
              <input
                type="radio"
                name={exercise.id}
                checked={selected}
                disabled={locked}
                onChange={() => onChange(option.id)}
              />
              {option.text}
              {revealed && correct && <strong>✓ Správná odpověď</strong>}
              {revealed && selected && !correct && (
                <strong>× Tvoje odpověď je chybná</strong>
              )}
            </label>
          )
        })}
      </fieldset>
    )
  if (exercise.type === 'multiple_choice') {
    const selected = Array.isArray(value) ? value : []
    return (
      <fieldset>
        <legend>{exercise.prompt}</legend>
        {exercise.options.map((option) => {
          const isSelected = selected.includes(option.id)
          const correct = exercise.correctOptionIds.includes(option.id)
          return (
            <label className={optionClass(correct, isSelected)} key={option.id}>
              <input
                type="checkbox"
                checked={isSelected}
                disabled={locked}
                onChange={(event) =>
                  onChange(
                    event.target.checked
                      ? [...selected, option.id]
                      : selected.filter((id) => id !== option.id),
                  )
                }
              />
              {option.text}
              {revealed && correct && <strong>✓ Správná odpověď</strong>}
              {revealed && isSelected && !correct && (
                <strong>× Tvoje odpověď je chybná</strong>
              )}
            </label>
          )
        })}
      </fieldset>
    )
  }
  if (exercise.type === 'numeric')
    return (
      <label>
        {exercise.prompt}
        <div className="input-with-unit">
          <input
            inputMode="decimal"
            disabled={locked}
            value={typeof value === 'string' ? value : ''}
            onChange={(event) => onChange(event.target.value)}
          />
          <span>{exercise.unit}</span>
        </div>
      </label>
    )
  if (exercise.type === 'short_text')
    return (
      <label>
        {exercise.prompt}
        <input
          disabled={locked}
          value={typeof value === 'string' ? value : ''}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
    )
  if (exercise.type === 'ordering') {
    const current = Array.isArray(value)
      ? value
      : exercise.steps.map((step) => step.id).reverse()
    return (
      <fieldset>
        <legend>{exercise.prompt}</legend>
        {exercise.correctOrder.map((_id, index) => (
          <label key={index}>
            Krok {index + 1}
            <select
              disabled={locked}
              value={current[index]}
              onChange={(event) => {
                const next = [...current]
                next[index] = event.target.value
                onChange(next)
              }}
            >
              {exercise.steps.map((step) => (
                <option key={step.id} value={step.id}>
                  {step.text}
                </option>
              ))}
            </select>
          </label>
        ))}
        {revealed && (
          <div className="correct-solution">
            <strong>Správné pořadí</strong>
            <ol>
              {exercise.correctOrder.map((id) => (
                <li key={id}>
                  {exercise.steps.find((step) => step.id === id)?.text}
                </li>
              ))}
            </ol>
          </div>
        )}
      </fieldset>
    )
  }
  const objectValue =
    typeof value === 'object' && !Array.isArray(value) ? value : { text: '' }
  return (
    <div>
      <label>
        {exercise.prompt}
        <textarea
          disabled={locked}
          rows={5}
          value={objectValue.text}
          onChange={(event) =>
            onChange({ ...objectValue, text: event.target.value })
          }
        />
      </label>
      {revealed && (
        <>
          <div className="model-solution">
            <strong>Modelové řešení</strong>
            <p>{exercise.modelSolution}</p>
          </div>
          <fieldset>
            <legend>Jak se vám úkol podařil?</legend>
            {(
              [
                ['failed', 'Nezvládnuto'],
                ['partial', 'Částečně'],
                ['mastered', 'Zvládnuto'],
              ] as const
            ).map(([rating, label]) => (
              <label className="option" key={rating}>
                <input
                  type="radio"
                  name={`${exercise.id}-rating`}
                  checked={objectValue.selfRating === rating}
                  disabled={locked}
                  onChange={() =>
                    onChange({ ...objectValue, selfRating: rating })
                  }
                />
                {label}
              </label>
            ))}
          </fieldset>
        </>
      )}
    </div>
  )
}

function createProgress(
  lessonId: string,
  existing: LessonProgress | undefined,
  changes: Partial<LessonProgress>,
): LessonProgress {
  const now = new Date().toISOString()
  return {
    course_id: payrollCourse.id,
    lesson_id: lessonId,
    content_version: payrollCourse.version,
    status: 'in_progress',
    last_score: null,
    best_score: null,
    attempts_count: 0,
    notes: '',
    started_at: existing?.started_at ?? now,
    completed_at: null,
    last_opened_at: now,
    updated_at: now,
    ...existing,
    ...changes,
  }
}

function LessonPageContent({ lessonId }: { lessonId: string }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const lesson = findLesson(lessonId)
  const { client, user } = useAuth()
  const progress = useProgress(client, user!.id)
  const saveProgress = useSaveProgress(client, user!.id)
  const existing = progress.data?.find((row) => row.lesson_id === lessonId)
  const [answers, setAnswers] = useState<Record<string, ExerciseAnswer>>({})
  const [submitted, setSubmitted] = useState(false)
  const [noteOverride, setNoteOverride] = useState<string | null>(null)
  const [noteState, setNoteState] = useState('')
  const [error, setError] = useState('')
  useEffect(() => {
    const section = searchParams.get('section')
    if (!isLessonSection(section)) return
    const target = document.getElementById(lessonSections[section])
    if (!target) return
    target.scrollIntoView({ block: 'start' })
    target.focus({ preventScroll: true })
  }, [lessonId, searchParams])
  useEffect(() => {
    if (lesson && progress.isSuccess && !existing)
      saveProgress.mutate(createProgress(lesson.id, undefined, {}))
  }, [lesson, progress.isSuccess]) // eslint-disable-line react-hooks/exhaustive-deps
  const evaluations = useMemo(
    () =>
      Object.fromEntries(
        lesson?.exercises.map((exercise) => [
          exercise.id,
          evaluateExercise(
            exercise,
            answers[exercise.id] ??
              (exercise.type === 'multiple_choice' ||
              exercise.type === 'ordering'
                ? []
                : ''),
          ),
        ]) ?? [],
      ),
    [answers, lesson],
  )
  if (!lesson)
    return (
      <div className="page">
        <h1>Lekce nebyla nalezena</h1>
        <Link to="/course">Zpět na osnovu</Link>
      </div>
    )
  const currentIndex = availableLessons.findIndex(
    (item) => item.id === lesson.id,
  )
  const currentModule = payrollCourse.modules.find(
    (item) => item.id === lesson.moduleId,
  )
  const score = calculateScore(
    lesson.exercises.map((exercise) => evaluations[exercise.id].score),
  )
  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    const missing = lesson.exercises.some((exercise) => {
      const answer = answers[exercise.id]
      return (
        answer == null ||
        answer === '' ||
        (exercise.type === 'self_assessed' &&
          typeof answer === 'object' &&
          !Array.isArray(answer) &&
          !answer.selfRating)
      )
    })
    if (missing) {
      setError(
        'Odpovězte na všechny otázky a u praktického úkolu zobrazte řešení a zvolte sebehodnocení.',
      )
      return
    }
    setSubmitted(true)
    try {
      await Promise.all(
        lesson.exercises.map((exercise) =>
          saveAttempt(client, user!.id, {
            lessonId: lesson.id,
            exerciseId: exercise.id,
            type: exercise.type,
            answer: answers[exercise.id],
            score: evaluations[exercise.id].score,
            correct: evaluations[exercise.id].correct,
          }),
        ),
      )
      await saveProgress.mutateAsync(
        createProgress(lesson.id, existing, {
          status: score >= 80 ? 'completed' : 'in_progress',
          last_score: score,
          best_score: Math.max(score, existing?.best_score ?? 0),
          attempts_count: (existing?.attempts_count ?? 0) + 1,
          completed_at:
            score >= 80
              ? new Date().toISOString()
              : (existing?.completed_at ?? null),
        }),
      )
    } catch {
      setError(
        'Výsledek se nepodařilo uložit. Odpovědi zůstaly na stránce; zkuste odeslání zopakovat.',
      )
    }
  }
  const saveNote = async () => {
    setNoteState('Ukládám…')
    try {
      await saveProgress.mutateAsync(
        createProgress(lesson.id, existing, {
          notes: noteOverride ?? existing?.notes ?? '',
        }),
      )
      setNoteState('Uloženo')
    } catch {
      setNoteState('Chyba při ukládání')
    }
  }
  const navigateToSection = (section: LessonSection) => {
    setSearchParams({ section })
  }
  const resetTest = () => {
    setAnswers({})
    setSubmitted(false)
    setError('')
  }
  return (
    <div className="lesson-page">
      <header className="lesson-hero">
        <div className="breadcrumbs">
          <Link to="/course">Kurz</Link>
          <span>/</span>
          <Link to={`/course/module/${lesson.moduleId}`}>
            {currentModule?.title ?? 'Modul'}
          </Link>
          <span>/</span>Lekce {lesson.order}
        </div>
        <div className="eyebrow">
          Lekce {lesson.order} ze {availableLessons.length}
        </div>
        <h1>{lesson.title}</h1>
        <p>{lesson.objectives.join(' · ')}</p>
        <nav aria-label="Obsah lekce">
          <button
            type="button"
            onClick={() => navigateToSection('explanation')}
          >
            Výklad
          </button>
          <button type="button" onClick={() => navigateToSection('flashcards')}>
            Kartičky
          </button>
          <button type="button" onClick={() => navigateToSection('practice')}>
            Procvičování
          </button>
          <button type="button" onClick={() => navigateToSection('notes')}>
            Poznámky
          </button>
        </nav>
      </header>
      <div className="lesson-layout">
        <article>
          <section
            id={lessonSections.explanation}
            className="lesson-section lesson-section--target"
            tabIndex={-1}
          >
            <div className="eyebrow">Cíle lekce</div>
            <ul className="objectives">
              {lesson.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
            {lesson.blocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </section>
          <Flashcards
            key={lesson.id}
            lessonId={lesson.id}
            cards={lesson.flashcards}
          />
          <section
            id={lessonSections.practice}
            className="lesson-section lesson-section--target"
            tabIndex={-1}
          >
            <div className="eyebrow">Závěrečný test</div>
            <h2>Ověřte si porozumění</h2>
            <p>
              Vyhodnocení je plně deterministické. Otevřený praktický úkol
              hodnotíte sami podle modelového řešení.
            </p>
            <form
              className="exercise-list"
              onSubmit={(event) => void submit(event)}
            >
              {lesson.exercises.map((exercise, index) => (
                <article
                  key={exercise.id}
                  className={
                    submitted
                      ? `exercise exercise--${evaluations[exercise.id].correct ? 'correct' : 'wrong'}`
                      : 'exercise'
                  }
                >
                  <div className="exercise__number">{index + 1}</div>
                  <ExerciseField
                    exercise={exercise}
                    value={answers[exercise.id]}
                    onChange={(value) => {
                      setAnswers((old) => ({ ...old, [exercise.id]: value }))
                      setSubmitted(false)
                    }}
                    revealed={
                      submitted ||
                      (answers[exercise.id] != null &&
                        exercise.type === 'self_assessed')
                    }
                    locked={submitted}
                  />
                  {submitted && (
                    <div className="feedback" role="status">
                      <strong>
                        {evaluations[exercise.id].correct
                          ? '✓ Správně'
                          : evaluations[exercise.id].score > 0
                            ? '~ Částečně'
                            : '× K zopakování'}
                      </strong>
                      <p>{evaluations[exercise.id].feedback}</p>
                      {exercise.type === 'short_text' && (
                        <p>
                          <strong>Vaše odpověď:</strong>{' '}
                          {String(answers[exercise.id])}
                          <br />
                          <strong>Přijatelné odpovědi:</strong>{' '}
                          {exercise.acceptedAnswers.join(', ')}
                        </p>
                      )}
                      {exercise.type === 'numeric' && (
                        <p>
                          <strong>Správný výsledek:</strong> {exercise.expected}{' '}
                          {exercise.unit}
                        </p>
                      )}
                      {exercise.type === 'numeric' && (
                        <ol>
                          {exercise.solutionSteps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      )}
                    </div>
                  )}
                </article>
              ))}
              {error && (
                <div className="form-message" role="alert">
                  {error}
                </div>
              )}
              <button
                className="button button--primary"
                disabled={saveProgress.isPending || submitted}
              >
                {saveProgress.isPending ? 'Ukládám…' : 'Vyhodnotit test'}
              </button>
              <button
                type="button"
                className="button button--secondary"
                onClick={resetTest}
                disabled={!submitted && Object.keys(answers).length === 0}
              >
                Resetovat test
              </button>
            </form>
            {submitted && (
              <div className={`result result--${scoreBand(score)}`}>
                <div>
                  <span>Výsledek lekce</span>
                  <strong>{score} %</strong>
                </div>
                <div>
                  <h3>{scoreLabel(score)}</h3>
                  <p>
                    {score >= 80
                      ? 'Lekce je dokončena. K tématu se vraťte při plánovaném opakování.'
                      : 'Projďete vysvětlení chyb a test zkuste znovu. Dokončení vyžaduje alespoň 80 %.'}
                  </p>
                </div>
              </div>
            )}
          </section>
          <section
            id={lessonSections.notes}
            className="lesson-section lesson-section--target"
            tabIndex={-1}
          >
            <div className="section-heading">
              <div>
                <div className="eyebrow">Soukromá poznámka</div>
                <h2>Co si chcete zapamatovat?</h2>
              </div>
              <span role="status">{noteState}</span>
            </div>
            <textarea
              rows={6}
              value={noteOverride ?? existing?.notes ?? ''}
              onChange={(event) => {
                setNoteOverride(event.target.value)
                setNoteState('Neuložené změny')
              }}
              placeholder="Napište si vlastní příklad nebo otázku…"
            />
            <button
              className="button button--secondary"
              onClick={() => void saveNote()}
            >
              Uložit poznámku
            </button>
          </section>
          <section className="lesson-section lesson-meta">
            <h2>Zdroje a platnost</h2>
            {lesson.legalValidity && (
              <p>
                <strong>Legislativní stav:</strong>{' '}
                {lesson.legalValidity.jurisdiction} · platnost od{' '}
                <time dateTime={lesson.legalValidity.validFrom}>
                  {new Intl.DateTimeFormat('cs-CZ').format(
                    new Date(`${lesson.legalValidity.validFrom}T00:00:00`),
                  )}
                </time>{' '}
                · odborně ověřeno{' '}
                <time dateTime={lesson.legalValidity.verifiedAt}>
                  {new Intl.DateTimeFormat('cs-CZ').format(
                    new Date(`${lesson.legalValidity.verifiedAt}T00:00:00`),
                  )}
                </time>
                . {lesson.legalValidity.note}
              </p>
            )}
            <ul>
              {lesson.sources.map((source) => (
                <li key={source.title}>{source.title}</li>
              ))}
            </ul>
          </section>
          <nav className="lesson-pagination">
            {currentIndex > 0 ? (
              <Link
                to={lessonSectionPath(availableLessons[currentIndex - 1].id)}
              >
                ← {availableLessons[currentIndex - 1].title}
              </Link>
            ) : (
              <span />
            )}
            {currentIndex < availableLessons.length - 1 ? (
              <Link
                to={lessonSectionPath(availableLessons[currentIndex + 1].id)}
              >
                {availableLessons[currentIndex + 1].title} →
              </Link>
            ) : (
              <Link to="/simulation">Přejít k simulaci →</Link>
            )}
          </nav>
        </article>
        <aside className="lesson-aside">
          <div>
            <span>Stav lekce</span>
            <strong>
              {existing?.status === 'completed'
                ? '✓ Dokončeno'
                : existing
                  ? '◐ Rozpracováno'
                  : '○ Nezahájeno'}
            </strong>
          </div>
          <div>
            <span>Nejlepší skóre</span>
            <strong>{existing?.best_score ?? 0} %</strong>
          </div>
          <div>
            <span>Počet pokusů</span>
            <strong>{existing?.attempts_count ?? 0}</strong>
          </div>
          <small>
            Poslední otevření
            <br />
            {existing?.last_opened_at
              ? new Intl.DateTimeFormat('cs-CZ').format(
                  new Date(existing.last_opened_at),
                )
              : 'právě teď'}
          </small>
        </aside>
      </div>
    </div>
  )
}

export function LessonPage() {
  const { lessonId = '' } = useParams()
  return <LessonPageContent key={lessonId} lessonId={lessonId} />
}
