import { StockAnalyticInputPort } from '..';

export interface StockAnalyticOutputPort {
  getStockTransactionsCount<R>(
    output: Awaited<ReturnType<StockAnalyticInputPort['getStockTransactionsCount']>>,
    exception: unknown,
  ): Promise<R>;
  getStockTransactionsSum<R>(
    output: Awaited<ReturnType<StockAnalyticInputPort['getStockTransactionsSum']>>,
    exception: unknown,
  ): Promise<R>;
  getStockRatio<R>(
    output: Awaited<ReturnType<StockAnalyticInputPort['getStockRatio']>>,
    exception: unknown,
  ): Promise<R>;
  getStockChange<R>(
    output: Awaited<ReturnType<StockAnalyticInputPort['getStockChange']>>,
    exception: unknown,
  ): Promise<R>;
}
