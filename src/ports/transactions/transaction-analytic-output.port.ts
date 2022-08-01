import { ITransaction } from '@persistance';
import { IAnalyticComparisonDto } from '@ports';

export interface TransactionAnalyticOutputPort {
  getMaxTransaction(output: ITransaction): Promise<any>;
  getMinTransaction(output: ITransaction): Promise<any>;
  getTransactionsCount(output: number): Promise<any>;
  getTransactionsSum(output: number): Promise<any>;
  getTransactionsAverage(output: number): Promise<any>;
  getTransactionsMedian(output: number): Promise<any>;
  getTransactionsRatio(output: IAnalyticComparisonDto): Promise<any>;
  getTransactionsChange(output: IAnalyticComparisonDto): Promise<any>;
}
