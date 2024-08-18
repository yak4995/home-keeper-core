import { IAnalyticComparisonDto, OutputPort } from '..';

export interface StockAnalyticOutputPort
  extends OutputPort<{
    getStockTransactionsCount: [{ result: number }, object];
    getStockTransactionsSum: [{ result: number }, object];
    getStockRatio: [IAnalyticComparisonDto, object];
    getStockChange: [IAnalyticComparisonDto, object];
  }> {}
