import { IStockTransactionDto, IStockTransactionListDto, InputPort } from '..';
import { ID, IStockTransaction } from '../..';

export interface StockTransactionInputPort
  extends InputPort<
    | 'getStockTransactionsList'
    | 'getStockTransactionDetails'
    | 'addStockTransaction'
    | 'editStockTransaction'
    | 'deleteStockTransaction'
  > {
  getStockTransactionsList(ownerId: ID, payload: IStockTransactionListDto): Promise<IStockTransaction[]>;
  getStockTransactionDetails(id: ID): Promise<IStockTransaction>;
  addStockTransaction(payload: IStockTransactionDto): Promise<IStockTransaction>;
  editStockTransaction(id: ID, payload: IStockTransactionDto): Promise<IStockTransaction>;
  deleteStockTransaction(id: ID): Promise<IStockTransaction>;
}
