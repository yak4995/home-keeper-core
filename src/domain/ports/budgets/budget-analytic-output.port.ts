import { BudgetAnalyticInputPort, OutputPort } from '..';

export interface BudgetAnalyticOutputPort
  extends OutputPort<
    'getMaxDifference' | 'getMinDifference' | 'getBudgetsRatio' | 'getBudgetsChange',
    BudgetAnalyticInputPort
  > {}
