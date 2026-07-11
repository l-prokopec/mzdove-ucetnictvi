import { defineLessonContentRegistry } from '../define'
import { employeePersonalDataContent } from './employee-personal-data'
import { employmentContractContent } from './employment-contract'
import { fixedTermProbationContent } from './fixed-term-probation'
import { onboardingChecklistContent } from './onboarding-checklist'
import { onboardingNotificationsContent } from './onboarding-notifications'
import { taxInsuranceOnboardingContent } from './tax-insurance-onboarding'

export const employeeOnboardingContent = defineLessonContentRegistry({
  'employment-contract': employmentContractContent,
  'fixed-term-probation': fixedTermProbationContent,
  'employee-personal-data': employeePersonalDataContent,
  'tax-insurance-onboarding': taxInsuranceOnboardingContent,
  'onboarding-notifications': onboardingNotificationsContent,
  'onboarding-checklist': onboardingChecklistContent,
})
