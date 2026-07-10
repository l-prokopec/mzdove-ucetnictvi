import { describe, expect, it } from 'vitest'
import { availableLessons, payrollCourse } from './courses/payroll/course'
import { payrollOutline, outlineLessons } from './courses/payroll/outline'
import { courseSchema } from './schema'
import { courseOutlineSchema } from './outline-schema'

describe('obsah kurzu', () => {
  it('načte a validuje kompatibilní kurz pro UI', () => {
    expect(courseSchema.parse(payrollCourse)).toBeTruthy()
    expect(payrollCourse.modules).toHaveLength(30)
  })

  it('validuje master osnovu a všechny lekce ponechává plánované', () => {
    expect(courseOutlineSchema.parse(payrollOutline)).toBeTruthy()
    expect(payrollOutline.modules).toHaveLength(30)
    expect(outlineLessons).toHaveLength(184)
    expect(outlineLessons.every((lesson) => lesson.status === 'planned')).toBe(
      true,
    )
    expect(availableLessons).toHaveLength(0)
    expect(
      payrollOutline.modules.filter((module) => module.category === 'core'),
    ).toHaveLength(23)
    expect(
      payrollOutline.modules.filter((module) => module.category === 'advanced'),
    ).toHaveLength(7)
  })
})
