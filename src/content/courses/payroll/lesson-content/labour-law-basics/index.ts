import { defineLessonContentRegistry } from '../define'
import { dependentWorkContent } from './dependent-work'
import { employmentPartiesContent } from './employment-parties'
import { labourRelationsContent } from './labour-relations'
import { equalTreatmentContent } from './equal-treatment'
import { legalActsFormContent } from './legal-acts-form'

export const labourLawBasicsContent = defineLessonContentRegistry({
  'dependent-work': dependentWorkContent,
  'employment-parties': employmentPartiesContent,
  'labour-relations': labourRelationsContent,
  'equal-treatment': equalTreatmentContent,
  'legal-acts-form': legalActsFormContent,
})
