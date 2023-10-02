import { TransactionAnalyticInputPort } from '..';

export interface TransactionAnalyticOutputPort {
  getMaxTransaction<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getMaxTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  getMinTransaction<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getMinTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsCount<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsCount']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsSum<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsSum']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsAverage<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsAverage']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsMedian<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsMedian']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsRatio<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsRatio']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactionsChange<R>(
    output: Awaited<ReturnType<TransactionAnalyticInputPort['getTransactionsChange']>>,
    exception: unknown,
  ): Promise<R>;
}
