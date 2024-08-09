import { IAnalyticComparisonDto, OutputPort } from '..';
import { CustomGeneralType } from '../..';

export interface TransactionAnalyticOutputPort
  extends OutputPort<{
    getMaxTransaction: [number, CustomGeneralType];
    getMinTransaction: [number, CustomGeneralType];
    getTransactionsCount: [number, CustomGeneralType];
    getTransactionsSum: [number, CustomGeneralType];
    getTransactionsAverage: [number, CustomGeneralType];
    getTransactionsMedian: [number, CustomGeneralType];
    getTransactionsRatio: [IAnalyticComparisonDto, CustomGeneralType];
    getTransactionsChange: [IAnalyticComparisonDto, CustomGeneralType];
  }> {}
