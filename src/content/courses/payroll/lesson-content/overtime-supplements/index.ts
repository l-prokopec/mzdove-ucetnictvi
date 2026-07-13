import { holidayWorkContent } from './holiday-work'
import { nightWorkContent } from './night-work'
import { onCallDutyContent } from './on-call-duty'
import { overtimeCompensationContent } from './overtime-compensation'
import { overtimeIdentificationContent } from './overtime-identification'
import { supplementOverlapContent } from './supplement-overlap'
import { weekendWorkContent } from './weekend-work'

export const overtimeSupplementsContent = {
  'overtime-identification': overtimeIdentificationContent,
  'overtime-compensation': overtimeCompensationContent,
  'holiday-work': holidayWorkContent,
  'night-work': nightWorkContent,
  'weekend-work': weekendWorkContent,
  'on-call-duty': onCallDutyContent,
  'supplement-overlap': supplementOverlapContent,
}
