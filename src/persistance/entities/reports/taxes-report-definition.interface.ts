import { IPersistantEntity, ITax } from 'persistance';
import { AnalyticMetric } from 'enums';

export interface ITaxesReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  tax: ITax;
}
