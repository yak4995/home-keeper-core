import { AnalyticMetric, Period } from '..';

export interface IAnalyticDto {
  from?: Date;
  to?: Date;
  granularity?: Period;
  metric?: AnalyticMetric;
}
