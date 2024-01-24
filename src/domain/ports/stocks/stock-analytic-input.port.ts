import { IAnalyticComparisonDto, IStockAnalyticDto, InputPort } from '..';

export interface StockAnalyticInputPort
  extends InputPort<'getStockTransactionsCount' | 'getStockTransactionsSum' | 'getStockRatio' | 'getStockChange'> {
  getStockTransactionsCount(payload: IStockAnalyticDto): Promise<number>;
  getStockTransactionsSum(payload: IStockAnalyticDto): Promise<number>;
  getStockRatio(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
  getStockChange(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
}
