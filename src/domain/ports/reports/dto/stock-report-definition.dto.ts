import { AnalyticMetric } from '../../..';
import { ID } from '../../..';
import { IReportDefinitionDto } from '../..';

export interface IStockReportDefinitionDto extends IReportDefinitionDto {
  metric: AnalyticMetric;
  isOutcome: boolean;
  stockCategoryId: ID;
}
