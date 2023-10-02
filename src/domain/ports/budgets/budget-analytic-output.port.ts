import { BudgetAnalyticInputPort } from '..';

export interface BudgetAnalyticOutputPort {
  getMaxDifference<R>(
    output: Awaited<ReturnType<BudgetAnalyticInputPort['getMaxDifference']>>,
    exception: unknown,
  ): Promise<R>;
  getMinDifference<R>(
    output: Awaited<ReturnType<BudgetAnalyticInputPort['getMinDifference']>>,
    exception: unknown,
  ): Promise<R>;
  getBudgetsRatio<R>(
    output: Awaited<ReturnType<BudgetAnalyticInputPort['getBudgetsRatio']>>,
    exception: unknown,
  ): Promise<R>;
  getBudgetsChange<R>(
    output: Awaited<ReturnType<BudgetAnalyticInputPort['getBudgetsChange']>>,
    exception: unknown,
  ): Promise<R>;
}
