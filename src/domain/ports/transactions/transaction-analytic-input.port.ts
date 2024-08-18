import { ITransactionAnalyticDto, InputPort } from '..';

export interface TransactionAnalyticInputPort
  extends InputPort<{
    getMaxTransaction: [ITransactionAnalyticDto, object];
    getMinTransaction: [ITransactionAnalyticDto, object];
    getTransactionsCount: [ITransactionAnalyticDto, object];
    getTransactionsSum: [ITransactionAnalyticDto, object];
    getTransactionsAverage: [ITransactionAnalyticDto, object];
    getTransactionsMedian: [ITransactionAnalyticDto, object];
    getTransactionsRatio: [ITransactionAnalyticDto, object];
    getTransactionsChange: [ITransactionAnalyticDto, object];
  }> {}
