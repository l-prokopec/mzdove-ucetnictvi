export type OutlineDifficulty = 'beginner' | 'intermediate' | 'advanced'
export type OutlineCategory = 'core' | 'advanced'
export type OutlineLessonType =
  'theory' | 'process' | 'worked_example' | 'practice' | 'case_study'

export interface OutlineLesson {
  id: string
  title: string
  description: string
  estimatedMinutes: number
  learningObjectives: string[]
  prerequisites: string[]
  lessonType: OutlineLessonType
  status: 'planned' | 'available'
  hasWorkedExample: boolean
  hasExercise: boolean
}

export interface ModuleFinalTest {
  id: string
  title: string
  questionCount: number
  passingScore: number
  includesCalculation: boolean
  skillsAssessed: string[]
}

export interface OutlineModule {
  id: string
  title: string
  description: string
  difficulty: OutlineDifficulty
  estimatedMinutes: number
  prerequisites: string[]
  learningObjectives: string[]
  lessons: OutlineLesson[]
  category: OutlineCategory
  practicalScenarios: string[]
  plannedExamples: string[]
  finalTest: ModuleFinalTest
  sourceTopics: string[]
}

export interface CourseOutline {
  id: string
  title: string
  version: string
  targetOutcome: string
  modules: OutlineModule[]
}
