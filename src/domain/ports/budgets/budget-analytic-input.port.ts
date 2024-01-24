import { IAnalyticComparisonDto, IBudgetAnalyticDto, InputPort } from '..';

export interface BudgetAnalyticInputPort
  extends InputPort<'getMaxDifference' | 'getMinDifference' | 'getBudgetsRatio' | 'getBudgetsChange'> {
  getMaxDifference(payload: IBudgetAnalyticDto): Promise<number>;
  getMinDifference(payload: IBudgetAnalyticDto): Promise<number>;
  getBudgetsRatio(payload: IBudgetAnalyticDto): Promise<IAnalyticComparisonDto>;
  getBudgetsChange(payload: IBudgetAnalyticDto): Promise<IAnalyticComparisonDto>;
}
