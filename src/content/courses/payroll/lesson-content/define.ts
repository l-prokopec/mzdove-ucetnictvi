import type { LessonContentRegistry, RegisteredLessonContent } from './types'

export const defineLessonContent = <T extends RegisteredLessonContent>(
  content: T,
) => content

export const defineLessonContentRegistry = <T extends LessonContentRegistry>(
  registry: T,
) => registry
