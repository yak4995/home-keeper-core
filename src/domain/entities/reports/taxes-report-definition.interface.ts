import { IPersistantEntity, ITax } from '..';
import { AnalyticMetric } from '../..';

export interface ITaxesReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  tax: ITax;
}
