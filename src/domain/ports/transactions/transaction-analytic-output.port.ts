import { IAnalyticComparisonDto, OutputPort } from '..';

export interface TransactionAnalyticOutputPort
  extends OutputPort<{
    getMaxTransaction: [{ result: number }, object];
    getMinTransaction: [{ result: number }, object];
    getTransactionsCount: [{ result: number }, object];
    getTransactionsSum: [{ result: number }, object];
    getTransactionsAverage: [{ result: number }, object];
    getTransactionsMedian: [{ result: number }, object];
    getTransactionsSumRatio: [IAnalyticComparisonDto, object];
    getTransactionsCountRatio: [IAnalyticComparisonDto, object];
    getTransactionsChange: [IAnalyticComparisonDto, object];
  }> {}
