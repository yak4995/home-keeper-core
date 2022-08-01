import { AnalyticMetric, Period } from '@enums';

export interface IAnalyticDto {
  from?: Date;
  to?: Date;
  granularity?: Period;
  metric?: AnalyticMetric;
}
