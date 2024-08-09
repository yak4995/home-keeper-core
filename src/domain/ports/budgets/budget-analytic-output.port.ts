import { IAnalyticComparisonDto, OutputPort } from '..';
import { CustomGeneralType } from '../..';

export interface BudgetAnalyticOutputPort
  extends OutputPort<{
    getMaxDifference: [number, CustomGeneralType];
    getMinDifference: [number, CustomGeneralType];
    getBudgetsRatio: [IAnalyticComparisonDto, CustomGeneralType];
    getBudgetsChange: [IAnalyticComparisonDto, CustomGeneralType];
  }> {}
