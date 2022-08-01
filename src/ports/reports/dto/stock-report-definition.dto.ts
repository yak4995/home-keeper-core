import { AnalyticMetric } from '@enums';
import { ID } from '@persistance';
import { IReportDefinitionDto } from '@ports';

export interface IStockReportDefinitionDto extends IReportDefinitionDto {
  metric: AnalyticMetric;
  isOutcome: boolean;
  stockCategoryId: ID;
}
