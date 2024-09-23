import { OutputPort } from '..';
import { IStockTransaction, ListResponse } from '../..';

export interface StockTransactionOutputPort
  extends OutputPort<{
    getStockTransactionsList: [ListResponse<IStockTransaction>, object];
    getStockTransactionDetails: [IStockTransaction, object];

    createStockTransaction: [IStockTransaction, object];
    updateStockTransaction: [IStockTransaction, object];
    deleteStockTransaction: [IStockTransaction, object];
  }> {}
