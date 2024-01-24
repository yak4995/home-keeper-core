import { OutputPort, StockItemInputPort } from '../..';

export interface StockItemOutputPort
  extends OutputPort<
    'getStockItemsList' | 'getStockItemsDetails' | 'addStockItem' | 'editStockItem' | 'deleteStockItem',
    StockItemInputPort
  > {}
