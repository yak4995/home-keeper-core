import { IAnalyticComparisonDto, IAnalyticDto } from '@ports';

export interface IAnalyticService<T extends IAnalyticDto> {
  getMetric(query: T): Promise<number | IAnalyticComparisonDto>;
}
