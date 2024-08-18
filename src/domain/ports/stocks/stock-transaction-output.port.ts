import { OutputPort } from '..';
import { IStockTransaction } from '../..';

export interface StockTransactionOutputPort
  extends OutputPort<{
    getStockTransactionsList: [IStockTransaction[], object];
    getStockTransactionDetails: [IStockTransaction, object];

    createStockTransaction: [IStockTransaction, object];
    updateStockTransaction: [IStockTransaction, object];
    deleteStockTransaction: [IStockTransaction, object];
  }> {}
