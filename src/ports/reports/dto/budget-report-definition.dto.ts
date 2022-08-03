import { AnalyticMetric, BudgetAnalyticType } from 'enums';
import { ID } from 'persistance';
import { IReportDefinitionDto } from 'ports';

export interface IBudgetReportDefinitionDto extends IReportDefinitionDto {
  budgetItemId: ID;
  type: BudgetAnalyticType;
  metric: AnalyticMetric;
}
