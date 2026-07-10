import type { SupabaseClient } from '@supabase/supabase-js'
import type { LessonProgress } from '../types/course'
import { nextReviewDate } from '../lib/exercises'

export const progressKeys = { all: ['lesson-progress'] as const }

export async function fetchLessonProgress(
  client: SupabaseClient,
  userId: string,
): Promise<LessonProgress[]> {
  const { data, error } = await client
    .from('lesson_progress')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
  if (error) throw error
  return (data ?? []) as LessonProgress[]
}

export async function upsertLessonProgress(
  client: SupabaseClient,
  userId: string,
  progress: LessonProgress,
) {
  const { data, error } = await client
    .from('lesson_progress')
    .upsert(
      { ...progress, user_id: userId },
      { onConflict: 'user_id,course_id,lesson_id' },
    )
    .select()
    .single()
  if (error) throw error
  return data as LessonProgress
}

export async function saveAttempt(
  client: SupabaseClient,
  userId: string,
  value: {
    lessonId: string
    exerciseId: string
    type: string
    answer: unknown
    score: number
    correct: boolean
  },
) {
  const { error } = await client.from('exercise_attempts').insert({
    user_id: userId,
    course_id: 'payroll-cz',
    lesson_id: value.lessonId,
    exercise_id: value.exerciseId,
    exercise_type: value.type,
    answer: value.answer,
    score: value.score,
    is_correct: value.correct,
  })
  if (error) throw error
}

export async function saveFlashcard(
  client: SupabaseClient,
  userId: string,
  value: {
    id: string
    rating: 'failed' | 'partial' | 'mastered'
  },
) {
  const { data: previous, error: readError } = await client
    .from('flashcard_progress')
    .select('review_count')
    .eq('user_id', userId)
    .eq('course_id', 'payroll-cz')
    .eq('flashcard_id', value.id)
    .maybeSingle()
  if (readError) throw readError
  const reviewCount = (previous?.review_count as number | undefined) ?? 0
  const mastery =
    value.rating === 'failed' ? 0 : value.rating === 'partial' ? 1 : 2
  const { error } = await client.from('flashcard_progress').upsert(
    {
      user_id: userId,
      course_id: 'payroll-cz',
      flashcard_id: value.id,
      mastery_level: mastery,
      review_count: reviewCount + 1,
      last_reviewed_at: new Date().toISOString(),
      next_review_at: nextReviewDate(value.rating, reviewCount).toISOString(),
    },
    { onConflict: 'user_id,course_id,flashcard_id' },
  )
  if (error) throw error
}
