import { ITransactionAnalyticDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface TransactionAnalyticInputPort
  extends InputPort<{
    getMaxTransaction: [ITransactionAnalyticDto, CustomGeneralType];
    getMinTransaction: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsCount: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsSum: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsAverage: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsMedian: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsRatio: [ITransactionAnalyticDto, CustomGeneralType];
    getTransactionsChange: [ITransactionAnalyticDto, CustomGeneralType];
  }> {}
