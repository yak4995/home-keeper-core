import { IBudgetAnalyticDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface BudgetAnalyticInputPort
  extends InputPort<{
    getMaxDifference: [IBudgetAnalyticDto, CustomGeneralType];
    getMinDifference: [IBudgetAnalyticDto, CustomGeneralType];
    getBudgetsRatio: [IBudgetAnalyticDto, CustomGeneralType];
    getBudgetsChange: [IBudgetAnalyticDto, CustomGeneralType];
  }> {}
