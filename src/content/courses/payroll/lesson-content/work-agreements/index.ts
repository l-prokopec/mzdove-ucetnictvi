import { defineLessonContentRegistry } from '../define'
import { agreementComparisonContent } from './agreement-comparison'
import { agreementLifecycleContent } from './agreement-lifecycle'
import { agreementTaxInsuranceInputsContent } from './agreement-tax-insurance-inputs'
import { agreementTimeRecordsContent } from './agreement-time-records'
import { dpcPurposeContent } from './dpc-purpose'
import { dppPurposeContent } from './dpp-purpose'

export const workAgreementsContent = defineLessonContentRegistry({
  'dpp-purpose': dppPurposeContent,
  'dpc-purpose': dpcPurposeContent,
  'agreement-comparison': agreementComparisonContent,
  'agreement-time-records': agreementTimeRecordsContent,
  'agreement-tax-insurance-inputs': agreementTaxInsuranceInputsContent,
  'agreement-lifecycle': agreementLifecycleContent,
})
