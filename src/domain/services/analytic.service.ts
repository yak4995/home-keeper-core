import { IAnalyticComparisonDto, IAnalyticDto } from '..';

export interface IAnalyticService<T extends IAnalyticDto> {
  getMetric(query: T): Promise<number | IAnalyticComparisonDto>;
}
