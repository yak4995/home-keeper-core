import { AnalyticMetric } from '../../../enums';
import { ID } from '../../../persistance';
import { IReportDefinitionDto } from '../../../ports';

export interface ITransactionsReportDefinitionDto extends IReportDefinitionDto {
  accountId?: ID;
  categoryId: ID;
  metric: AnalyticMetric;
}
