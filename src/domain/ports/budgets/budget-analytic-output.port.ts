import { IAnalyticComparisonDto, OutputPort } from '..';

export interface BudgetAnalyticOutputPort
  extends OutputPort<{
    getMaxDifference: [{ result: number }, object];
    getMinDifference: [{ result: number }, object];
    getBudgetsRatio: [IAnalyticComparisonDto, object];
    getBudgetsChange: [IAnalyticComparisonDto, object];
  }> {}
