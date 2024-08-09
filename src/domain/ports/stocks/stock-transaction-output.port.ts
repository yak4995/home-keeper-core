import { OutputPort } from '..';
import { CustomGeneralType, IStockTransaction } from '../..';

export interface StockTransactionOutputPort
  extends OutputPort<{
    getStockTransactionsList: [IStockTransaction[], CustomGeneralType];
    getStockTransactionDetails: [IStockTransaction, CustomGeneralType];

    createStockTransaction: [IStockTransaction, CustomGeneralType];
    updateStockTransaction: [IStockTransaction, CustomGeneralType];
    deleteStockTransaction: [IStockTransaction, CustomGeneralType];
  }> {}
