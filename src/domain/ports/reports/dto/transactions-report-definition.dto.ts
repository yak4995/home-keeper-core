import { AnalyticMetric } from '../../..';
import { ID } from '../../..';
import { IReportDefinitionDto } from '../..';

export interface ITransactionsReportDefinitionDto extends IReportDefinitionDto {
  accountId?: ID;
  categoryId: ID;
  metric: AnalyticMetric;
}
