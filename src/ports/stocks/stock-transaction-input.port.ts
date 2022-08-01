import { ID, IStockTransaction } from '@persistance';
import { IStockTransactionDto, IStockTransactionListDto } from '@ports';

export interface StockTransactionInputPort {
  getStockTransactionsList(ownerId: ID, payload: IStockTransactionListDto): Promise<IStockTransaction[]>;
  getStockTransactionDetails(id: ID): Promise<IStockTransaction>;
  addStockTransaction(payload: IStockTransactionDto): Promise<IStockTransaction>;
  editStockTransaction(id: ID, payload: IStockTransactionDto): Promise<IStockTransaction>;
  deleteStockTransaction(id: ID): Promise<IStockTransaction>;
}
