import { IPersistantEntity, ITax } from '../..';
import { AnalyticMetric } from '../../../enums';

export interface ITaxesReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  tax: ITax;
}
