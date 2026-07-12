import type { LessonContentRegistry } from './types'
import { employeeOnboardingContent } from './employee-onboarding'
import { employmentChangesTerminationContent } from './employment-changes-termination'
import { labourLawBasicsContent } from './labour-law-basics'
import { payrollFoundationsContent } from './payroll-foundations'
import { workAgreementsContent } from './work-agreements'
import { workingTimeContent } from './working-time'

// Obsah se přidává po modulech a explicitně se registruje pod stabilním ID lekce.
export const lessonContentRegistry: LessonContentRegistry = {
  ...payrollFoundationsContent,
  ...labourLawBasicsContent,
  ...employeeOnboardingContent,
  ...employmentChangesTerminationContent,
  ...workAgreementsContent,
  ...workingTimeContent,
} satisfies LessonContentRegistry
