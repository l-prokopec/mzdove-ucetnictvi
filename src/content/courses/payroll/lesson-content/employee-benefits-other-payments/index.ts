import { benefitClassificationContent } from './benefit-classification'
import { benefitsPayrollCaseContent } from './benefits-payroll-case'
import { benefitTaxInsuranceImpactContent } from './benefit-tax-insurance-impact'
import { employerRetirementContributionsContent } from './employer-retirement-contributions'
import { hazardousWorkMandatoryContributionContent } from './hazardous-work-mandatory-contribution'
import { nonCashBenefitsContent } from './non-cash-benefits'

export const employeeBenefitsOtherPaymentsContent = {
  'benefit-classification': benefitClassificationContent,
  'non-cash-benefits': nonCashBenefitsContent,
  'benefit-tax-insurance-impact': benefitTaxInsuranceImpactContent,
  'employer-retirement-contributions': employerRetirementContributionsContent,
  'hazardous-work-mandatory-contribution':
    hazardousWorkMandatoryContributionContent,
  'benefits-payroll-case': benefitsPayrollCaseContent,
}
