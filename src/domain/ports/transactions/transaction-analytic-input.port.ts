import { IAnalyticComparisonDto, ITransactionAnalyticDto, InputPort } from '..';

export interface TransactionAnalyticInputPort
  extends InputPort<
    | 'getMaxTransaction'
    | 'getMinTransaction'
    | 'getTransactionsCount'
    | 'getTransactionsSum'
    | 'getTransactionsAverage'
    | 'getTransactionsMedian'
    | 'getTransactionsRatio'
    | 'getTransactionsChange'
  > {
  getMaxTransaction(payload: ITransactionAnalyticDto): Promise<number>;
  getMinTransaction(payload: ITransactionAnalyticDto): Promise<number>;
  getTransactionsCount(payload: ITransactionAnalyticDto): Promise<number>;
  getTransactionsSum(payload: ITransactionAnalyticDto): Promise<number>;
  getTransactionsAverage(payload: ITransactionAnalyticDto): Promise<number>;
  getTransactionsMedian(payload: ITransactionAnalyticDto): Promise<number>;
  getTransactionsRatio(payload: ITransactionAnalyticDto): Promise<IAnalyticComparisonDto>;
  getTransactionsChange(payload: ITransactionAnalyticDto): Promise<IAnalyticComparisonDto>;
}
