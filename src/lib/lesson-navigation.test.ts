import { describe, expect, it } from 'vitest'
import { lessonSectionPath } from './lesson-navigation'

describe('navigace na sekce lekce', () => {
  it('používá route query kompatibilní s HashRouterem', () => {
    expect(lessonSectionPath('lesson-id', 'practice')).toBe(
      '/course/lesson/lesson-id?section=practice',
    )
    expect(lessonSectionPath('lesson-id', 'flashcards')).toBe(
      '/course/lesson/lesson-id?section=flashcards',
    )
  })
})
