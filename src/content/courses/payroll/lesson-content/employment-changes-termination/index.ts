import { defineLessonContentRegistry } from '../define'
import { employmentDataChangesContent } from './employment-data-changes'
import { employmentTransferContent } from './employment-transfer'
import { offboardingProcessContent } from './offboarding-process'
import { severanceBasicsContent } from './severance-basics'
import { terminationDateContent } from './termination-date'
import { terminationMethodsContent } from './termination-methods'

export const employmentChangesTerminationContent = defineLessonContentRegistry({
  'employment-data-changes': employmentDataChangesContent,
  'employment-transfer': employmentTransferContent,
  'termination-methods': terminationMethodsContent,
  'termination-date': terminationDateContent,
  'severance-basics': severanceBasicsContent,
  'offboarding-process': offboardingProcessContent,
})
