import type { Course, Lesson } from '../../../types/course'
import { courseSchema } from '../../schema'
import { payrollOutline } from './outline'

const rawCourse: Course = {
  id: payrollOutline.id,
  title: payrollOutline.title,
  description: payrollOutline.targetOutcome,
  version: payrollOutline.version,
  defaultLegalYear: 2026,
  modules: payrollOutline.modules.map((module, moduleIndex) => ({
    id: module.id,
    sourceReference: module.sourceTopics.join(' · '),
    title: module.title,
    description: module.description,
    order: moduleIndex + 1,
    status: 'planned',
    lessons: module.lessons.map<Lesson>((lesson, lessonIndex) => ({
      id: lesson.id,
      moduleId: module.id,
      title: lesson.title,
      order: lessonIndex + 1,
      status: lesson.status,
      objectives: lesson.learningObjectives,
      skillIds: [`outline-${lesson.id}`],
      blocks: [],
      flashcards: [],
      exercises: [],
      sources: [],
    })),
  })),
}

export const payrollCourse = courseSchema.parse(rawCourse) as Course
export const availableLessons = payrollCourse.modules
  .flatMap((module) => module.lessons)
  .filter((lesson) => lesson.status === 'available')
export const findLesson = (lessonId: string) =>
  availableLessons.find((lesson) => lesson.id === lessonId)
