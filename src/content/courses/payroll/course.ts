import type { Course, Lesson } from '../../../types/course'
import type { CourseOutline } from '../../../types/course-outline'
import { courseOutlineSchema } from '../../outline-schema'
import { courseSchema, lessonContentSchema } from '../../schema'
import {
  lessonContentRegistry,
  type LessonContentRegistry,
} from './lesson-content'
import { payrollOutline } from './outline'

export function buildPayrollCourse(
  outlineInput: CourseOutline,
  registry: LessonContentRegistry,
): Course {
  const outline = courseOutlineSchema.parse(outlineInput) as CourseOutline
  const outlineLessons = new Map(
    outline.modules.flatMap((module) =>
      module.lessons.map((lesson) => [lesson.id, module.id] as const),
    ),
  )
  const parsedContent = new Map(
    Object.entries(registry).map(([lessonId, content]) => {
      const expectedModuleId = outlineLessons.get(lessonId)
      if (!expectedModuleId) {
        throw new Error(
          `Registr plného obsahu obsahuje neznámé ID lekce: ${lessonId}`,
        )
      }
      const parsed = lessonContentSchema.parse(content)
      if (parsed.moduleId !== expectedModuleId) {
        throw new Error(
          `Lekce ${lessonId} patří v osnově do modulu ${expectedModuleId}, ale obsah uvádí ${parsed.moduleId}.`,
        )
      }
      return [lessonId, parsed] as const
    }),
  )

  const rawCourse: Course = {
    id: outline.id,
    title: outline.title,
    description: outline.targetOutcome,
    version: outline.version,
    defaultLegalYear: 2026,
    modules: outline.modules.map((module, moduleIndex) => ({
      id: module.id,
      sourceReference: module.sourceTopics.join(' · '),
      title: module.title,
      description: module.description,
      order: moduleIndex + 1,
      status: module.lessons.some((lesson) => lesson.status === 'available')
        ? 'available'
        : 'planned',
      lessons: module.lessons.map<Lesson>((lesson, lessonIndex) => {
        const content = parsedContent.get(lesson.id)
        if (lesson.status === 'available' && !content) {
          throw new Error(
            `Lekce ${lesson.id} je v osnově dostupná, ale nemá registrovaný plný obsah.`,
          )
        }

        return {
          id: lesson.id,
          moduleId: module.id,
          title: lesson.title,
          order: lessonIndex + 1,
          status: lesson.status,
          objectives: lesson.learningObjectives,
          skillIds: content?.skillIds ?? [`outline-${lesson.id}`],
          legalValidity: content?.legalValidity,
          blocks: content?.blocks ?? [],
          flashcards: content?.flashcards ?? [],
          exercises: content?.exercises ?? [],
          sources: content?.sources ?? [],
        }
      }),
    })),
  }

  return courseSchema.parse(rawCourse) as Course
}

export const payrollCourse = buildPayrollCourse(
  payrollOutline,
  lessonContentRegistry,
)
export const availableLessons = payrollCourse.modules
  .flatMap((module) => module.lessons)
  .filter((lesson) => lesson.status === 'available')
export const findLesson = (lessonId: string) =>
  availableLessons.find((lesson) => lesson.id === lessonId)
