import type { LessonContentRegistry } from './types'
import { employeeOnboardingContent } from './employee-onboarding'
import { labourLawBasicsContent } from './labour-law-basics'
import { payrollFoundationsContent } from './payroll-foundations'

// Obsah se přidává po modulech a explicitně se registruje pod stabilním ID lekce.
export const lessonContentRegistry: LessonContentRegistry = {
  ...payrollFoundationsContent,
  ...labourLawBasicsContent,
  ...employeeOnboardingContent,
} satisfies LessonContentRegistry
