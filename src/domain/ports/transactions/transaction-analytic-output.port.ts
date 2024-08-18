import { IAnalyticComparisonDto, OutputPort } from '..';

export interface TransactionAnalyticOutputPort
  extends OutputPort<{
    getMaxTransaction: [{ result: number }, object];
    getMinTransaction: [{ result: number }, object];
    getTransactionsCount: [{ result: number }, object];
    getTransactionsSum: [{ result: number }, object];
    getTransactionsAverage: [{ result: number }, object];
    getTransactionsMedian: [{ result: number }, object];
    getTransactionsRatio: [IAnalyticComparisonDto, object];
    getTransactionsChange: [IAnalyticComparisonDto, object];
  }> {}
