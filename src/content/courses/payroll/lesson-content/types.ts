import type {
  Exercise,
  Flashcard,
  LegalValidity,
  LessonBlock,
  SourceReference,
} from '../../../../types/course'

export interface RegisteredLessonContent {
  moduleId: string
  skillIds: string[]
  legalValidity: LegalValidity
  blocks: LessonBlock[]
  flashcards: Flashcard[]
  exercises: Exercise[]
  sources: SourceReference[]
}

export type LessonContentRegistry = Readonly<
  Record<string, RegisteredLessonContent>
>
