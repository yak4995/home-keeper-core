import { IAnalyticComparisonDto } from '@ports';

export interface StockAnalyticOutputPort {
  getStockTransactionsCount(output: number): Promise<any>;
  getStockTransactionsSum(output: number): Promise<any>;
  getStockRatio(output: IAnalyticComparisonDto): Promise<any>;
  getStockChange(output: IAnalyticComparisonDto): Promise<any>;
}
