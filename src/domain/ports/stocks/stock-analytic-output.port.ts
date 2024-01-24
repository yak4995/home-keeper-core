import { OutputPort, StockAnalyticInputPort } from '..';

export interface StockAnalyticOutputPort
  extends OutputPort<
    'getStockTransactionsCount' | 'getStockTransactionsSum' | 'getStockRatio' | 'getStockChange',
    StockAnalyticInputPort
  > {}
