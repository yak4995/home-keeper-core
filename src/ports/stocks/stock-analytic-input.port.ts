import { IAnalyticComparisonDto, IStockAnalyticDto } from 'ports';

export interface StockAnalyticInputPort {
  getStockTransactionsCount(payload: IStockAnalyticDto): Promise<number>;
  getStockTransactionsSum(payload: IStockAnalyticDto): Promise<number>;
  getStockRatio(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
  getStockChange(payload: IStockAnalyticDto): Promise<IAnalyticComparisonDto>;
}
