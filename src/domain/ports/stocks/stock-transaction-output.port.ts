import { IStockTransaction } from '../..';

export interface StockTransactionOutputPort {
  getStockTransactionsList(output: IStockTransaction[]): Promise<any>;
  getStockTransactionDetails(output: IStockTransaction): Promise<any>;
  addStockTransaction(output: IStockTransaction): Promise<any>;
  editStockTransaction(output: IStockTransaction): Promise<any>;
  deleteStockTransaction(output: IStockTransaction): Promise<any>;
}
