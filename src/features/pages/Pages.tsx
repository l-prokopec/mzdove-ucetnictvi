import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import {
  availableLessons,
  payrollCourse,
} from '../../content/courses/payroll/course'
import { checklistStatus, scoreBand } from '../../lib/exercises'
import { lessonSectionPath } from '../../lib/lesson-navigation'
import { useAuth } from '../auth/AuthProvider'
import { useProgress } from '../progress/useProgress'
import { StatusBadge } from '../../components/StatusBadge'

const formatDate = (value: string | null | undefined) =>
  value
    ? new Intl.DateTimeFormat('cs-CZ', {
        dateStyle: 'medium',
        timeZone: 'Europe/Prague',
      }).format(new Date(value))
    : '—'

function useUserProgress() {
  const { client, user } = useAuth()
  return { client, user: user!, progress: useProgress(client, user!.id) }
}

export function DashboardPage() {
  const { progress } = useUserProgress()
  const currentLessonIds = new Set(availableLessons.map((lesson) => lesson.id))
  const rows = (progress.data ?? []).filter((row) =>
    currentLessonIds.has(row.lesson_id),
  )
  const completed = rows.filter((row) => row.status === 'completed').length
  const average = rows.filter((row) => row.last_score != null).length
    ? Math.round(
        rows.reduce((sum, row) => sum + (row.last_score ?? 0), 0) /
          rows.filter((row) => row.last_score != null).length,
      )
    : 0
  const next = availableLessons.find(
    (lesson) =>
      !rows.some(
        (row) => row.lesson_id === lesson.id && row.status === 'completed',
      ),
  )
  const progressPercent = availableLessons.length
    ? Math.round((completed / availableLessons.length) * 100)
    : 0
  const recent = [...rows]
    .sort((a, b) => b.last_opened_at.localeCompare(a.last_opened_at))
    .slice(0, 3)
  return (
    <div className="page">
      <div className="hero">
        <div>
          <div className="eyebrow">Studijní přehled</div>
          <h1>Dobře zvládnuté základy šetří čas při každé uzávěrce.</h1>
          <p>
            Pokračujte doporučenou lekcí nebo se vraťte k tématu, které
            potřebuje upevnit.
          </p>
          {next ? (
            <Link
              className="button button--primary"
              to={`/course/lesson/${next.id}`}
            >
              Pokračovat: {next.title}
            </Link>
          ) : (
            <Link className="button button--primary" to="/course">
              Prohlédnout novou osnovu
            </Link>
          )}
        </div>
        <div className="hero__progress">
          <div
            className="ring"
            style={
              {
                '--progress': `${progressPercent}%`,
              } as React.CSSProperties
            }
          >
            <strong>{progressPercent} %</strong>
            <span>dostupného obsahu</span>
          </div>
        </div>
      </div>
      {progress.isError && (
        <div className="error-panel">
          Pokrok se nepodařilo načíst. Zkontrolujte připojení a zkuste stránku
          obnovit.
        </div>
      )}
      <section className="metric-grid">
        <article>
          <span>Dokončené lekce</span>
          <strong>
            {completed} / {availableLessons.length}
          </strong>
        </article>
        <article>
          <span>Průměrné skóre</span>
          <strong>{average} %</strong>
        </article>
        <article>
          <span>Pokusy</span>
          <strong>
            {rows.reduce((sum, row) => sum + row.attempts_count, 0)}
          </strong>
        </article>
        <article>
          <span>K opakování</span>
          <strong>
            {rows.filter((row) => (row.best_score ?? 100) < 80).length}
          </strong>
        </article>
      </section>
      <div className="two-columns">
        <section className="panel">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Aktuální modul</div>
              <h2>Nová master osnova</h2>
            </div>
            <Link to="/course">Zobrazit osnovu</Link>
          </div>
          <div className="lesson-mini-list">
            {availableLessons.slice(0, 4).map((lesson, index) => {
              const row = rows.find((item) => item.lesson_id === lesson.id)
              return (
                <Link key={lesson.id} to={`/course/lesson/${lesson.id}`}>
                  <span className="number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <strong>{lesson.title}</strong>
                    <small>
                      {row?.last_score != null
                        ? `Poslední skóre ${row.last_score} %`
                        : 'Doporučené pořadí'}
                    </small>
                  </span>
                  <StatusBadge status={row?.status ?? 'not_started'} />
                </Link>
              )
            })}
            {availableLessons.length === 0 && (
              <p className="empty">
                Všechny nové lekce jsou zatím označené jako připravované.
              </p>
            )}
          </div>
        </section>
        <section className="panel">
          <div className="eyebrow">Naposledy studováno</div>
          <h2>Vaše aktivita</h2>
          {recent.length ? (
            <div className="activity-list">
              {recent.map((row) => (
                <Link
                  key={row.lesson_id}
                  to={`/course/lesson/${row.lesson_id}`}
                >
                  <strong>
                    {
                      availableLessons.find(
                        (lesson) => lesson.id === row.lesson_id,
                      )?.title
                    }
                  </strong>
                  <span>
                    {formatDate(row.last_opened_at)} · {row.last_score ?? '—'} %
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="empty">
              Zatím tu není žádná aktivita. Otevřete první lekci.
            </p>
          )}
        </section>
      </div>
    </div>
  )
}

export function CoursePage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Osnova kurzu</div>
          <h1>{payrollCourse.title}</h1>
          <p>{payrollCourse.description}</p>
        </div>
        <div className="version-chip">Verze {payrollCourse.version}</div>
      </div>
      <div className="module-list">
        {payrollCourse.modules.map((module) => {
          return (
            <article
              key={module.id}
              className={
                module.status === 'planned'
                  ? 'module module--planned'
                  : 'module'
              }
            >
              <div className="module__index">
                {String(module.order).padStart(2, '0')}
              </div>
              <div className="module__body">
                <div>
                  <h2>{module.title}</h2>
                  <p>{module.description}</p>
                  <small>{module.sourceReference}</small>
                </div>
                <div className="module__meta">
                  <StatusBadge status={module.status} />
                  <span>{module.lessons.length} plánovaných lekcí</span>
                  <Link
                    className="button button--secondary"
                    to={`/course/module/${module.id}`}
                  >
                    Zobrazit osnovu
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export function ModulePage() {
  const { moduleId } = useParams()
  const module = payrollCourse.modules.find((item) => item.id === moduleId)
  const { progress } = useUserProgress()
  const rows = progress.data ?? []
  if (!module)
    return (
      <div className="page">
        <h1>Modul nebyl nalezen</h1>
      </div>
    )
  return (
    <div className="page">
      <div className="breadcrumbs">
        <Link to="/course">Kurz</Link>
        <span>/</span>
        {module.title}
      </div>
      <div className="page-header">
        <div>
          <div className="eyebrow">Modul {module.order}</div>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
        </div>
        <StatusBadge status={module.status} />
      </div>
      <div className="lesson-cards">
        {module.lessons.map((lesson) => {
          if (lesson.status === 'planned') {
            return (
              <article className="planned-lesson-card" key={lesson.id}>
                <span className="number">
                  {String(lesson.order).padStart(2, '0')}
                </span>
                <div>
                  <h2>{lesson.title}</h2>
                  <p>{lesson.objectives.join(' · ')}</p>
                </div>
                <StatusBadge status="planned" />
              </article>
            )
          }
          const row = rows.find((item) => item.lesson_id === lesson.id)
          return (
            <Link key={lesson.id} to={`/course/lesson/${lesson.id}`}>
              <span className="number">
                {String(lesson.order).padStart(2, '0')}
              </span>
              <div>
                <h2>{lesson.title}</h2>
                <p>{lesson.objectives.join(' · ')}</p>
                <small>
                  {lesson.flashcards.length} kartičky ·{' '}
                  {lesson.exercises.length} cvičení
                </small>
              </div>
              <div>
                <StatusBadge status={row?.status ?? 'not_started'} />
                {row?.best_score != null && <strong>{row.best_score} %</strong>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function ReviewPage() {
  const { client, user, progress } = useUserProgress()
  const weak = (progress.data ?? []).filter(
    (row) =>
      availableLessons.some((lesson) => lesson.id === row.lesson_id) &&
      (row.best_score ?? 100) < 80,
  )
  const reviewItems = useQuery({
    queryKey: ['review-items'],
    queryFn: async () => {
      const [attempts, cards] = await Promise.all([
        client
          .from('exercise_attempts')
          .select('lesson_id,exercise_id,created_at')
          .eq('user_id', user.id)
          .eq('is_correct', false)
          .order('created_at', { ascending: false })
          .limit(20),
        client
          .from('flashcard_progress')
          .select('flashcard_id,mastery_level,next_review_at')
          .eq('user_id', user.id)
          .lt('mastery_level', 2)
          .order('next_review_at', { ascending: true })
          .limit(20),
      ])
      if (attempts.error) throw attempts.error
      if (cards.error) throw cards.error
      const currentLessonIds = new Set(
        availableLessons.map((lesson) => lesson.id),
      )
      const currentFlashcardIds = new Set(
        availableLessons.flatMap((lesson) =>
          lesson.flashcards.map((card) => card.id),
        ),
      )
      return {
        attempts: (attempts.data ?? []).filter((attempt) =>
          currentLessonIds.has(attempt.lesson_id),
        ),
        cards: (cards.data ?? []).filter((card) =>
          currentFlashcardIds.has(card.flashcard_id),
        ),
      }
    },
    retry: 1,
    enabled: availableLessons.length > 0,
  })
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Cílené opakování</div>
          <h1>Upevněte slabší místa</h1>
          <p>
            Nesprávná odpověď se doporučí dnes, částečné zvládnutí za dva dny a
            správná odpověď nejdříve za sedm dní.
          </p>
        </div>
      </div>
      <section className="metric-grid">
        <article>
          <span>Chybné odpovědi</span>
          <strong>{reviewItems.data?.attempts.length ?? 0}</strong>
        </article>
        <article>
          <span>Nezvládnuté kartičky</span>
          <strong>{reviewItems.data?.cards.length ?? 0}</strong>
        </article>
        <article>
          <span>Slabší témata</span>
          <strong>{weak.length}</strong>
        </article>
        <article>
          <span>Doporučení</span>
          <strong>{weak.length ? 'Dnes' : 'Průběžně'}</strong>
        </article>
      </section>
      {weak.length ? (
        <div className="lesson-cards">
          {weak.map((row) => {
            const lesson = availableLessons.find(
              (item) => item.id === row.lesson_id,
            )!
            return (
              <Link key={row.lesson_id} to={`/course/lesson/${row.lesson_id}`}>
                <span className="number">~</span>
                <div>
                  <h2>{lesson.title}</h2>
                  <p>Nejlepší výsledek zatím nedosáhl hranice zvládnutí.</p>
                </div>
                <strong>{row.best_score} %</strong>
              </Link>
            )
          })}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Nic naléhavého k opakování</h2>
          <p>
            Po prvních pokusech se zde objeví lekce s výsledkem pod 80 % a
            nezvládnuté kartičky.
          </p>
          <Link className="button button--primary" to="/course">
            Přejít do kurzu
          </Link>
        </div>
      )}
      {(reviewItems.data?.attempts.length ?? 0) > 0 && (
        <section className="panel review-details">
          <h2>Poslední chybně zodpovězené otázky</h2>
          <div className="activity-list">
            {reviewItems.data!.attempts.slice(0, 8).map((attempt, index) => {
              const lesson = availableLessons.find(
                (item) => item.id === attempt.lesson_id,
              )
              const exercise = lesson?.exercises.find(
                (item) => item.id === attempt.exercise_id,
              )
              return (
                <Link
                  key={`${attempt.exercise_id}-${attempt.created_at}-${index}`}
                  to={lessonSectionPath(attempt.lesson_id, 'practice')}
                >
                  <strong>{exercise?.prompt ?? attempt.exercise_id}</strong>
                  <span>{lesson?.title ?? attempt.lesson_id}</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}
      {(reviewItems.data?.cards.length ?? 0) > 0 && (
        <section className="panel review-details">
          <h2>Kartičky označené k procvičení</h2>
          <div className="activity-list">
            {reviewItems.data!.cards.slice(0, 8).map((card) => {
              const lesson = availableLessons.find((item) =>
                item.flashcards.some(
                  (flashcard) => flashcard.id === card.flashcard_id,
                ),
              )
              const flashcard = lesson?.flashcards.find(
                (item) => item.id === card.flashcard_id,
              )
              return (
                <Link
                  key={card.flashcard_id}
                  to={lessonSectionPath(lesson?.id ?? '', 'flashcards')}
                >
                  <strong>{flashcard?.front ?? card.flashcard_id}</strong>
                  <span>{lesson?.title}</span>
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}

export function ChecklistPage() {
  const { progress } = useUserProgress()
  const rows = progress.data ?? []
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Checklist dovedností</div>
          <h1>Co už umíte použít v praxi</h1>
          <p>Stav se odvozuje z výsledků lekcí, není ručně upravitelný.</p>
        </div>
      </div>
      <div className="checklist">
        {availableLessons.map((lesson) => {
          const scores = rows
            .filter(
              (row) => row.lesson_id === lesson.id && row.best_score != null,
            )
            .map((row) => row.best_score!)
          const status = checklistStatus(scores)
          return (
            <article key={lesson.id}>
              <StatusBadge status={status} />
              <div>
                <h2>{lesson.objectives[0]}</h2>
                <p>{lesson.title}</p>
              </div>
              <span>
                {scores.length ? `${Math.max(...scores)} %` : 'Bez pokusu'}
              </span>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export function StatisticsPage() {
  const { client, user, progress } = useUserProgress()
  const currentLessonIds = new Set(availableLessons.map((lesson) => lesson.id))
  const rows = (progress.data ?? []).filter((row) =>
    currentLessonIds.has(row.lesson_id),
  )
  const scored = rows.filter((row) => row.best_score != null)
  const currentFlashcardIds = availableLessons.flatMap((lesson) =>
    lesson.flashcards.map((card) => card.id),
  )
  const dueCards = useQuery({
    queryKey: ['due-flashcards-count'],
    queryFn: async () => {
      const { count, error } = await client
        .from('flashcard_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .in('flashcard_id', currentFlashcardIds)
        .lte('next_review_at', new Date().toISOString())
      if (error) throw error
      return count ?? 0
    },
    enabled: currentFlashcardIds.length > 0,
  })
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Statistiky</div>
          <h1>Výsledky bez zbytečných čísel</h1>
          <p>
            Přehled vychází pouze z vaší studijní aktivity, bez externí
            analytiky.
          </p>
        </div>
      </div>
      <section className="metric-grid">
        <article>
          <span>Dokončeno</span>
          <strong>
            {rows.filter((row) => row.status === 'completed').length}
          </strong>
        </article>
        <article>
          <span>Pokusy</span>
          <strong>
            {rows.reduce((sum, row) => sum + row.attempts_count, 0)}
          </strong>
        </article>
        <article>
          <span>Průměr maxima</span>
          <strong>
            {scored.length
              ? Math.round(
                  scored.reduce((sum, row) => sum + row.best_score!, 0) /
                    scored.length,
                )
              : 0}{' '}
            %
          </strong>
        </article>
        <article>
          <span>Kartičky k opakování</span>
          <strong>{dueCards.data ?? 0}</strong>
        </article>
      </section>
      <section className="panel">
        <h2>Úspěšnost podle tématu</h2>
        <div className="bar-list">
          {availableLessons.map((lesson) => {
            const score =
              rows.find((row) => row.lesson_id === lesson.id)?.best_score ?? 0
            return (
              <div key={lesson.id}>
                <span>{lesson.title}</span>
                <div>
                  <i
                    className={`bar bar--${scoreBand(score)}`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <strong>{score} %</strong>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

const simulationSteps = [
  {
    title: 'Převzetí podkladů',
    text: 'Fiktivní firma Javorová dílna s.r.o. má zaměstnance Annu Testovou a Petra Ukázkového. Zkontrolujte seznam nástupních a měsíčních podkladů.',
    answer:
      'Ověřím pracovní dokumenty, období, schválení, docházku a zda jsou údaje kompletní.',
  },
  {
    title: 'Kontrola změn',
    text: 'Anna nastoupila tento měsíc. Petr má schválené osobní ohodnocení a evidovaný přesčas; v docházce je také krátká dovolená.',
    answer:
      'Oddělím nástupní agendu od měsíčních změn a u každé položky ověřím schválený zdroj.',
  },
  {
    title: 'Rekapitulace',
    text: 'Sestavte kontrolní seznam před předáním podkladů ke zpracování.',
    answer:
      'Dva zaměstnanci, správné období, úplná docházka, schválené ohodnocení a přesčas, doložená dovolená, vyřešené nesrovnalosti.',
  },
]

export function SimulationPage() {
  const { client, user } = useAuth()
  const state = useQuery({
    queryKey: ['simulation'],
    queryFn: async () => {
      const { data, error } = await client
        .from('simulation_progress')
        .select('*')
        .eq('user_id', user!.id)
        .eq('simulation_id', 'javorova-2026-01')
        .maybeSingle()
      if (error) throw error
      return data as {
        current_step: number
        completed_at: string | null
      } | null
    },
  })
  const current = Math.min(
    state.data?.current_step ?? 0,
    simulationSteps.length - 1,
  )
  const step = simulationSteps[current]
  const save = useMutation({
    mutationFn: async (next: number) => {
      const completed = next >= simulationSteps.length
      const { error } = await client.from('simulation_progress').upsert(
        {
          user_id: user!.id,
          simulation_id: 'javorova-2026-01',
          current_step: Math.min(next, simulationSteps.length - 1),
          state: { reviewed: next },
          score: completed ? 100 : null,
          completed_at: completed ? new Date().toISOString() : null,
        },
        { onConflict: 'user_id,simulation_id' },
      )
      if (error) throw error
    },
    onSuccess: () => state.refetch(),
  })
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Demonstrační měsíc · leden 2026</div>
          <h1>Javorová dílna s.r.o.</h1>
          <p>
            Fiktivní pracovní simulace zaměřená na správný postup, nikoli na
            úplný legislativní výpočet čisté mzdy.
          </p>
        </div>
        <div className="version-chip">
          Krok {current + 1} / {simulationSteps.length}
        </div>
      </div>
      <div className="simulation">
        <aside>
          {simulationSteps.map((item, index) => (
            <div
              key={item.title}
              className={
                index === current ? 'active' : index < current ? 'done' : ''
              }
            >
              <span>{index < current ? '✓' : index + 1}</span>
              {item.title}
            </div>
          ))}
        </aside>
        <section className="panel">
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <label>
            Vaše pracovní poznámka
            <textarea rows={6} placeholder="Sepište, co byste zkontrolovali…" />
          </label>
          <details>
            <summary>Zobrazit modelový postup</summary>
            <p>{step.answer}</p>
          </details>
          <button
            className="button button--primary"
            disabled={save.isPending}
            onClick={() => save.mutate(current + 1)}
          >
            {current === simulationSteps.length - 1
              ? 'Dokončit simulaci'
              : 'Uložit a pokračovat'}
          </button>
          {save.isError && (
            <div className="form-message">
              Stav simulace se nepodařilo uložit.
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export function SettingsPage() {
  const { user, signOut } = useAuth()
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <div className="eyebrow">Nastavení</div>
          <h1>Studijní účet</h1>
        </div>
      </div>
      <section className="panel settings">
        <div>
          <span>Přihlášený e-mail</span>
          <strong>{user?.email}</strong>
        </div>
        <div>
          <span>Jazyk a formát</span>
          <strong>Čeština · CZK · Europe/Prague</strong>
        </div>
        <div>
          <span>Synchronizace</span>
          <strong>Supabase · poslední zápis vyhrává</strong>
        </div>
        <button
          className="button button--secondary"
          onClick={() => void signOut()}
        >
          Odhlásit se
        </button>
        <p className="notice">
          Aplikace neukládá vaše heslo. Přihlášení a session spravuje Supabase
          Auth.
        </p>
      </section>
    </div>
  )
}
