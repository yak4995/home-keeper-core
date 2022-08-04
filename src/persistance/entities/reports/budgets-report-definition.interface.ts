import { IPersistantEntity, IBudgetItem } from '../..';
import { AnalyticMetric, BudgetAnalyticType } from '../../../enums';

export interface IBudgetsReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  type: BudgetAnalyticType;
  budgetItem: IBudgetItem;
}
