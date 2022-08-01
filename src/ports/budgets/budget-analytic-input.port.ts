import { IAnalyticComparisonDto, IBudgetAnalyticDto } from '@ports';

export interface BudgetAnalyticInputPort {
  getMaxDifference(payload: IBudgetAnalyticDto): Promise<number>;
  getMinDifference(payload: IBudgetAnalyticDto): Promise<number>;
  getBudgetsRatio(payload: IBudgetAnalyticDto): Promise<IAnalyticComparisonDto>;
  getBudgetsChange(payload: IBudgetAnalyticDto): Promise<IAnalyticComparisonDto>;
}
