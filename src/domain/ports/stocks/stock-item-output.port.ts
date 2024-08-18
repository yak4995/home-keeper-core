import { OutputPort } from '..';
import { IStockItem } from '../..';

export interface StockItemOutputPort
  extends OutputPort<{
    getStockItemsList: [IStockItem[], object];
    getStockItemsDetails: [IStockItem, object];

    createStockItem: [IStockItem, object];
    updateStockItem: [IStockItem, object];
    deleteStockItem: [IStockItem, object];
  }> {}
