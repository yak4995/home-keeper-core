import { ID, IStockTransaction } from '../..';
import { IStockTransactionDto, IStockTransactionListDto } from '..';

export interface StockTransactionInputPort {
  getStockTransactionsList(ownerId: ID, payload: IStockTransactionListDto): Promise<IStockTransaction[]>;
  getStockTransactionDetails(id: ID): Promise<IStockTransaction>;
  addStockTransaction(payload: IStockTransactionDto): Promise<IStockTransaction>;
  editStockTransaction(id: ID, payload: IStockTransactionDto): Promise<IStockTransaction>;
  deleteStockTransaction(id: ID): Promise<IStockTransaction>;
}
