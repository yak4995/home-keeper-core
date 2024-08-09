import { IIdentificationDto, IStockTransactionDto, IStockTransactionListDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface StockTransactionInputPort
  extends InputPort<{
    getStockTransactionsList: [{ ownerId: ID } & IStockTransactionListDto, CustomGeneralType];
    getStockTransactionDetails: [IIdentificationDto, CustomGeneralType];

    createStockTransaction: [IStockTransactionDto, CustomGeneralType];
    updateStockTransaction: [IIdentificationDto & IStockTransactionDto, CustomGeneralType];
    deleteStockTransaction: [IIdentificationDto, CustomGeneralType];
  }> {}
