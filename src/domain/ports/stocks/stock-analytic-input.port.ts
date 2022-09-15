import { IAnalyticComparisonDto, IStockAnalyticDto } from '..';

export interface StockAnalyticInputPort {
  getStockTransactionsCount(payload: IStockAnalyticDto): Promise<number>;
  getStockTransactionsSum(payload: IStockAnalyticDto): Promise<number>;
  getStockRatio(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
  getStockChange(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
}
