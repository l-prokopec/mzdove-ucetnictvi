import { defineLessonContentRegistry } from '../define'
import { payrollPurposeContent } from './payroll-purpose'
import { payrollRolesContent } from './payroll-roles'
import { payrollInputsContent } from './payroll-inputs'
import { payrollMonthCycleContent } from './payroll-month-cycle'
import { payrollControlTrailContent } from './payroll-control-trail'

export const payrollFoundationsContent = defineLessonContentRegistry({
  'payroll-purpose': payrollPurposeContent,
  'payroll-roles': payrollRolesContent,
  'payroll-inputs': payrollInputsContent,
  'payroll-month-cycle': payrollMonthCycleContent,
  'payroll-control-trail': payrollControlTrailContent,
})
