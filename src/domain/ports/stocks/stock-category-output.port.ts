import { OutputPort, StockCategoryInputPort } from '../..';

export interface StockCategoryOutputPort
  extends OutputPort<
    'getRootCategories' | 'getCategoryChildren' | 'addStockCategory' | 'editStockCategory' | 'deleteStockCategory',
    StockCategoryInputPort
  > {}
