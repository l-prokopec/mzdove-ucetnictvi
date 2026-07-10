import { z } from 'zod'

const outlineLessonSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(3),
  description: z.string().min(10),
  estimatedMinutes: z.number().int().positive(),
  learningObjectives: z.array(z.string().min(10)).min(1),
  prerequisites: z.array(z.string()),
  lessonType: z.enum([
    'theory',
    'process',
    'worked_example',
    'practice',
    'case_study',
  ]),
  status: z.enum(['planned', 'available']),
  hasWorkedExample: z.boolean(),
  hasExercise: z.boolean(),
})

const moduleFinalTestSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(3),
  questionCount: z.number().int().min(5),
  passingScore: z.number().int().min(50).max(100),
  includesCalculation: z.boolean(),
  skillsAssessed: z.array(z.string().min(3)).min(1),
})

const outlineModuleSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(3),
  description: z.string().min(20),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  estimatedMinutes: z.number().int().positive(),
  prerequisites: z.array(z.string()),
  learningObjectives: z.array(z.string().min(10)).min(2),
  lessons: z.array(outlineLessonSchema).min(2),
  category: z.enum(['core', 'advanced']),
  practicalScenarios: z.array(z.string().min(5)).min(1),
  plannedExamples: z.array(z.string().min(5)),
  finalTest: moduleFinalTestSchema,
  sourceTopics: z.array(z.string().min(3)).min(1),
})

export const courseOutlineSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    title: z.string().min(3),
    version: z.string().min(1),
    targetOutcome: z.string().min(20),
    modules: z.array(outlineModuleSchema).min(1),
  })
  .superRefine((outline, context) => {
    const moduleIds = new Set<string>()
    const lessonIds = new Set<string>()

    outline.modules.forEach((module, moduleIndex) => {
      if (moduleIds.has(module.id)) {
        context.addIssue({
          code: 'custom',
          path: ['modules', moduleIndex, 'id'],
          message: `Duplicitní ID modulu: ${module.id}`,
        })
      }

      for (const prerequisite of module.prerequisites) {
        if (!moduleIds.has(prerequisite)) {
          context.addIssue({
            code: 'custom',
            path: ['modules', moduleIndex, 'prerequisites'],
            message: `Prerequisite musí odkazovat na předchozí modul: ${prerequisite}`,
          })
        }
      }

      moduleIds.add(module.id)
      module.lessons.forEach((lesson, lessonIndex) => {
        if (lessonIds.has(lesson.id)) {
          context.addIssue({
            code: 'custom',
            path: ['modules', moduleIndex, 'lessons', lessonIndex, 'id'],
            message: `Duplicitní ID lekce: ${lesson.id}`,
          })
        }

        for (const prerequisite of lesson.prerequisites) {
          if (!lessonIds.has(prerequisite)) {
            context.addIssue({
              code: 'custom',
              path: [
                'modules',
                moduleIndex,
                'lessons',
                lessonIndex,
                'prerequisites',
              ],
              message: `Návaznost musí odkazovat na předchozí lekci: ${prerequisite}`,
            })
          }
        }
        lessonIds.add(lesson.id)
      })

      if (module.finalTest.id !== `${module.id}-test`) {
        context.addIssue({
          code: 'custom',
          path: ['modules', moduleIndex, 'finalTest', 'id'],
          message: 'ID testu musí mít tvar <module-id>-test.',
        })
      }
    })
  })
