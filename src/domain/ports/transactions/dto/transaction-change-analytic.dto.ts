import { ITransactionAnalyticDto } from './transaction-analytic.dto';
import { AnalyticMetric, Period } from '../../../enums';

export interface ITransactionChangeAnalyticDto extends ITransactionAnalyticDto {
  // IANA zone used for calendar grouping; omitted for legacy server-zone behaviour.
  timeZone?: string;
  granularity: Period;
  metric: AnalyticMetric;
}
