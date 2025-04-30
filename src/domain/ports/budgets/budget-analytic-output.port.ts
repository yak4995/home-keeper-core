import { IAnalyticComparisonDto, OutputPort } from '..';

export interface BudgetAnalyticOutputPort
  extends OutputPort<{
    getRatio: [IAnalyticComparisonDto, object];
    getChange: [IAnalyticComparisonDto, object];
  }> {}
