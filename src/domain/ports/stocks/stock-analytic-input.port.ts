import { IStockAnalyticDto, InputPort } from '..';

export interface StockAnalyticInputPort
  extends InputPort<{
    getStockTransactionsCount: [IStockAnalyticDto, object];
    getStockTransactionsSum: [IStockAnalyticDto, object];
    getStockRatio: [IStockAnalyticDto, object];
    getStockChange: [IStockAnalyticDto, object];
  }> {}
