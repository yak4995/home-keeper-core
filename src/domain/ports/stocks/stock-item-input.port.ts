import { IIdentificationDto, IStockItemDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface StockItemInputPort
  extends InputPort<{
    getStockItemsList: [IIdentificationDto, CustomGeneralType];
    getStockItemsDetails: [IIdentificationDto, CustomGeneralType];

    createStockItem: [IStockItemDto, CustomGeneralType];
    updateStockItem: [IIdentificationDto & IStockItemDto, CustomGeneralType];
    deleteStockItem: [IIdentificationDto, CustomGeneralType];
  }> {}
