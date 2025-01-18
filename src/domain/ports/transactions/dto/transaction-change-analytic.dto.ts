import { ITransactionAnalyticDto } from './transaction-analytic.dto';
import { AnalyticMetric, Period } from '../../../enums';

export interface ITransactionChangeAnalyticDto extends ITransactionAnalyticDto {
  granularity: Period;
  metric: AnalyticMetric;
}
