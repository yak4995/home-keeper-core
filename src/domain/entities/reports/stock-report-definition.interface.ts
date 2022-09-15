import { IPersistantEntity, IStockCategory } from '..';
import { AnalyticMetric } from '../..';

export interface IStockReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  isOutcome: boolean;
  stockCategory: IStockCategory;
}
