import { OutputPort } from '..';
import { IStockCategory } from '../..';

export interface StockCategoryOutputPort
  extends OutputPort<{
    getRootCategories: [IStockCategory[], object];
    getCategoryChildren: [IStockCategory[], object];

    createStockCategory: [IStockCategory, object];
    updateStockCategory: [IStockCategory, object];
    deleteStockCategory: [IStockCategory, object];
  }> {}
