export const lessonSections = {
  explanation: 'lesson-explanation',
  flashcards: 'lesson-flashcards',
  practice: 'lesson-practice',
  notes: 'lesson-notes',
} as const

export type LessonSection = keyof typeof lessonSections

export function lessonSectionPath(lessonId: string, section?: LessonSection) {
  const path = `/course/lesson/${encodeURIComponent(lessonId)}`
  return section ? `${path}?section=${section}` : path
}

export function isLessonSection(value: string | null): value is LessonSection {
  return value !== null && value in lessonSections
}
