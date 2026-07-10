import type {
  ContentStatus,
  LessonProgressStatus,
  MasteryStatus,
} from '../types/course'

const labels: Record<
  ContentStatus | LessonProgressStatus | MasteryStatus,
  string
> = {
  available: 'Dostupné',
  planned: 'Připravujeme',
  not_started: '○ Nezahájeno',
  in_progress: '◐ Rozpracováno',
  completed: '✓ Dokončeno',
  partial: '~ Částečně',
  mastered: '✓ Zvládnuto',
}

export function StatusBadge({ status }: { status: keyof typeof labels }) {
  return <span className={`status status--${status}`}>{labels[status]}</span>
}
