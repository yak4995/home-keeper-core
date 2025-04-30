import { IBudgetAnalyticDto, IBudgetChangeAnalyticDto, InputPort } from '..';

export interface BudgetAnalyticInputPort
  extends InputPort<{
    getRatio: [IBudgetAnalyticDto, object];
    getChange: [IBudgetChangeAnalyticDto, object];
  }> {}
