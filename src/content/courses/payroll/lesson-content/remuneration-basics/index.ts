import { minimumWageGuaranteedSalaryContent } from './minimum-wage-guaranteed-salary'
import { nonWageBenefitsContent } from './non-wage-benefits'
import { paydayPaymentContent } from './payday-payment'
import { remunerationSettingContent } from './remuneration-setting'
import { wageComponentsContent } from './wage-components'
import { wageSalaryAgreementContent } from './wage-salary-agreement'

export const remunerationBasicsContent = {
  'wage-salary-agreement': wageSalaryAgreementContent,
  'remuneration-setting': remunerationSettingContent,
  'wage-components': wageComponentsContent,
  'minimum-wage-guaranteed-salary': minimumWageGuaranteedSalaryContent,
  'non-wage-benefits': nonWageBenefitsContent,
  'payday-payment': paydayPaymentContent,
}
