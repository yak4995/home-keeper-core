import { OutputPort } from '..';
import { CustomGeneralType, IStockItem } from '../..';

export interface StockItemOutputPort
  extends OutputPort<{
    getStockItemsList: [IStockItem[], CustomGeneralType];
    getStockItemsDetails: [IStockItem, CustomGeneralType];

    createStockItem: [IStockItem, CustomGeneralType];
    updateStockItem: [IStockItem, CustomGeneralType];
    deleteStockItem: [IStockItem, CustomGeneralType];
  }> {}
