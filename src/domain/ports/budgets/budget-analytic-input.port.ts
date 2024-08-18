import { IBudgetAnalyticDto, InputPort } from '..';

export interface BudgetAnalyticInputPort
  extends InputPort<{
    getMaxDifference: [IBudgetAnalyticDto, object];
    getMinDifference: [IBudgetAnalyticDto, object];
    getBudgetsRatio: [IBudgetAnalyticDto, object];
    getBudgetsChange: [IBudgetAnalyticDto, object];
  }> {}
