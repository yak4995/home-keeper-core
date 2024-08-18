import { IIdentificationDto, IStockTransactionDto, IStockTransactionListDto, InputPort } from '..';
import { ID } from '../..';

export interface StockTransactionInputPort
  extends InputPort<{
    getStockTransactionsList: [{ ownerId: ID } & IStockTransactionListDto, object];
    getStockTransactionDetails: [IIdentificationDto, object];

    createStockTransaction: [IStockTransactionDto, object];
    updateStockTransaction: [IIdentificationDto & IStockTransactionDto, object];
    deleteStockTransaction: [IIdentificationDto, object];
  }> {}
