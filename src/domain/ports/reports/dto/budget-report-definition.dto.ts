import { AnalyticMetric, BudgetAnalyticType } from '../../..';
import { ID } from '../../..';
import { IReportDefinitionDto } from '../..';

export interface IBudgetReportDefinitionDto extends IReportDefinitionDto {
  budgetItemId: ID;
  type: BudgetAnalyticType;
  metric: AnalyticMetric;
}
