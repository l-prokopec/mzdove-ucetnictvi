import type {
  ContentStatus,
  CourseModule,
  LessonProgress,
  LessonProgressStatus,
} from '../types/course'

export type ModuleProgressStatus =
  ContentStatus | Extract<LessonProgressStatus, 'in_progress' | 'completed'>

export function progressStatusAfterEvaluation(
  currentStatus: LessonProgressStatus,
  score: number,
): LessonProgressStatus {
  if (currentStatus === 'completed') return 'completed'
  return score >= 80 ? 'completed' : 'in_progress'
}

export function moduleProgressStatus(
  module: CourseModule,
  progress: readonly LessonProgress[],
): ModuleProgressStatus {
  const availableLessons = module.lessons.filter(
    (lesson) => lesson.status === 'available',
  )
  if (module.status === 'planned' || availableLessons.length === 0)
    return 'planned'

  const statuses = new Map(
    progress.map((row) => [row.lesson_id, row.status] as const),
  )
  const completed = availableLessons.filter(
    (lesson) => statuses.get(lesson.id) === 'completed',
  ).length
  if (completed === availableLessons.length) return 'completed'

  const started = availableLessons.some((lesson) => {
    const status = statuses.get(lesson.id)
    return status === 'in_progress' || status === 'completed'
  })
  return started ? 'in_progress' : 'available'
}
