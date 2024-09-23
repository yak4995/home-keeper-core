import { OutputPort } from '..';
import { IStockItem, ListResponse } from '../..';

export interface StockItemOutputPort
  extends OutputPort<{
    getStockItemsList: [ListResponse<IStockItem>, object];
    getStockItemsDetails: [IStockItem, object];

    createStockItem: [IStockItem, object];
    updateStockItem: [IStockItem, object];
    deleteStockItem: [IStockItem, object];
  }> {}
