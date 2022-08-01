import { IPersistantEntity, IStockCategory } from '@persistance';
import { AnalyticMetric } from '@enums';

export interface IStockReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  isOutcome: boolean;
  stockCategory: IStockCategory;
}
