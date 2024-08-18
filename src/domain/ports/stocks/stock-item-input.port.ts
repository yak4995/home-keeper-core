import { IIdentificationDto, IStockItemDto, InputPort } from '..';

export interface StockItemInputPort
  extends InputPort<{
    getStockItemsList: [IIdentificationDto, object];
    getStockItemsDetails: [IIdentificationDto, object];

    createStockItem: [IStockItemDto, object];
    updateStockItem: [IIdentificationDto & IStockItemDto, object];
    deleteStockItem: [IIdentificationDto, object];
  }> {}
