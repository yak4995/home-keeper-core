import { IAnalyticComparisonDto } from '..';

export interface BudgetAnalyticOutputPort {
  getMaxDifference(output: number): Promise<number>;
  getMinDifference(output: number): Promise<number>;
  getBudgetsRatio(output: IAnalyticComparisonDto): Promise<any>;
  getBudgetsChange(output: IAnalyticComparisonDto): Promise<any>;
}
