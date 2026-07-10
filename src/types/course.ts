export type ContentStatus = 'available' | 'planned'
export type MasteryStatus = 'not_started' | 'partial' | 'mastered'
export type LessonProgressStatus = 'not_started' | 'in_progress' | 'completed'

export interface LegalValidity {
  year: number
  note: string
}

export interface SourceReference {
  title: string
  url?: string
  kind: 'official' | 'didactic' | 'outline'
}

export type LessonBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'definition'; term: string; definition: string }
  | { type: 'list'; items: string[] }
  | { type: 'notice'; tone: 'info' | 'warning'; text: string }
  | { type: 'example'; title: string; situation: string; solution: string }
  | { type: 'summary'; items: string[] }

export interface Flashcard {
  id: string
  front: string
  back: string
  explanation: string
  skillIds: string[]
}

interface ExerciseBase {
  id: string
  prompt: string
  skillIds: string[]
  explanation: string
  commonMistake: string
}

export type Exercise =
  | (ExerciseBase & {
      type: 'single_choice'
      options: { id: string; text: string }[]
      correctOptionId: string
    })
  | (ExerciseBase & {
      type: 'multiple_choice'
      options: { id: string; text: string }[]
      correctOptionIds: string[]
    })
  | (ExerciseBase & {
      type: 'numeric'
      expected: string
      tolerance: string
      unit: string
      rounding: 'none' | 'half_up_2' | 'whole_half_up'
      solutionSteps: string[]
    })
  | (ExerciseBase & {
      type: 'short_text'
      acceptedAnswers: string[]
      ignoreDiacritics?: boolean
    })
  | (ExerciseBase & {
      type: 'ordering'
      steps: { id: string; text: string }[]
      correctOrder: string[]
    })
  | (ExerciseBase & { type: 'self_assessed'; modelSolution: string })

export interface Lesson {
  id: string
  moduleId: string
  title: string
  order: number
  status: ContentStatus
  objectives: string[]
  skillIds: string[]
  legalValidity?: LegalValidity
  blocks: LessonBlock[]
  flashcards: Flashcard[]
  exercises: Exercise[]
  sources: SourceReference[]
}

export interface CourseModule {
  id: string
  sourceReference?: string
  title: string
  description: string
  order: number
  status: ContentStatus
  lessons: Lesson[]
}

export interface Course {
  id: string
  title: string
  description: string
  version: string
  defaultLegalYear: number
  modules: CourseModule[]
}

export interface LessonProgress {
  course_id: string
  lesson_id: string
  content_version: string
  status: LessonProgressStatus
  last_score: number | null
  best_score: number | null
  attempts_count: number
  notes: string
  started_at: string | null
  completed_at: string | null
  last_opened_at: string
  updated_at: string
}
