import { z } from 'zod'

const sourceSchema = z.object({
  title: z.string().min(1),
  url: z.url().optional(),
  kind: z.enum(['official', 'didactic', 'outline']),
})

const blockSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('paragraph'), text: z.string().min(1) }),
  z.object({ type: z.literal('heading'), text: z.string().min(1) }),
  z.object({
    type: z.literal('definition'),
    term: z.string().min(1),
    definition: z.string().min(1),
  }),
  z.object({
    type: z.literal('list'),
    items: z.array(z.string().min(1)).min(1),
  }),
  z.object({
    type: z.literal('notice'),
    tone: z.enum(['info', 'warning']),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal('example'),
    title: z.string().min(1),
    situation: z.string().min(1),
    solution: z.string().min(1),
  }),
  z.object({
    type: z.literal('summary'),
    items: z.array(z.string().min(1)).min(1),
  }),
])

const exerciseBase = {
  id: z.string().min(1),
  prompt: z.string().min(1),
  skillIds: z.array(z.string().min(1)).min(1),
  explanation: z.string().min(1),
  commonMistake: z.string().min(1),
}

const optionSchema = z.object({
  id: z.string().min(1),
  text: z.string().min(1),
})
const exerciseSchema = z.discriminatedUnion('type', [
  z.object({
    ...exerciseBase,
    type: z.literal('single_choice'),
    options: z.array(optionSchema).min(2),
    correctOptionId: z.string(),
  }),
  z.object({
    ...exerciseBase,
    type: z.literal('multiple_choice'),
    options: z.array(optionSchema).min(2),
    correctOptionIds: z.array(z.string()).min(1),
  }),
  z.object({
    ...exerciseBase,
    type: z.literal('numeric'),
    expected: z.string(),
    tolerance: z.string(),
    unit: z.string(),
    rounding: z.enum(['none', 'half_up_2', 'whole_half_up']),
    solutionSteps: z.array(z.string()).min(1),
  }),
  z.object({
    ...exerciseBase,
    type: z.literal('short_text'),
    acceptedAnswers: z.array(z.string()).min(1),
    ignoreDiacritics: z.boolean().optional(),
  }),
  z.object({
    ...exerciseBase,
    type: z.literal('ordering'),
    steps: z.array(optionSchema).min(2),
    correctOrder: z.array(z.string()).min(2),
  }),
  z.object({
    ...exerciseBase,
    type: z.literal('self_assessed'),
    modelSolution: z.string().min(1),
  }),
])

const lessonSchema = z.object({
  id: z.string().min(1),
  moduleId: z.string().min(1),
  title: z.string().min(1),
  order: z.number().int().positive(),
  status: z.enum(['available', 'planned']),
  objectives: z.array(z.string()).min(1),
  skillIds: z.array(z.string()).min(1),
  legalValidity: z
    .object({ year: z.number().int(), note: z.string() })
    .optional(),
  blocks: z.array(blockSchema).min(1),
  flashcards: z
    .array(
      z.object({
        id: z.string(),
        front: z.string(),
        back: z.string(),
        explanation: z.string(),
        skillIds: z.array(z.string()).min(1),
      }),
    )
    .min(3),
  exercises: z.array(exerciseSchema).min(5),
  sources: z.array(sourceSchema).min(1),
})

export const courseSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  version: z.string().min(1),
  defaultLegalYear: z.number().int(),
  modules: z
    .array(
      z.object({
        id: z.string(),
        sourceReference: z.string().optional(),
        title: z.string(),
        description: z.string(),
        order: z.number().int(),
        status: z.enum(['available', 'planned']),
        lessons: z.array(lessonSchema),
      }),
    )
    .min(1),
})
