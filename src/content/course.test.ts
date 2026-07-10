import { describe, expect, it } from 'vitest'
import { availableLessons, payrollCourse } from './courses/payroll-cz/course'
import { courseSchema } from './schema'

describe('obsah kurzu', () => {
  it('načte a validuje kurz', () => {
    expect(courseSchema.parse(payrollCourse)).toBeTruthy()
    expect(payrollCourse.modules).toHaveLength(39)
  })

  it('obsahuje sedm dostupných úplných lekcí', () => {
    expect(availableLessons).toHaveLength(7)
    for (const lesson of availableLessons) {
      expect(lesson.flashcards.length).toBeGreaterThanOrEqual(3)
      expect(lesson.exercises.length).toBeGreaterThanOrEqual(5)
    }
  })
})
