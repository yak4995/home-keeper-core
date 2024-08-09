import { OutputPort } from '..';
import { CustomGeneralType, IStockCategory } from '../..';

export interface StockCategoryOutputPort
  extends OutputPort<{
    getRootCategories: [IStockCategory[], CustomGeneralType];
    getCategoryChildren: [IStockCategory[], CustomGeneralType];

    createStockCategory: [IStockCategory, CustomGeneralType];
    updateStockCategory: [IStockCategory, CustomGeneralType];
    deleteStockCategory: [IStockCategory, CustomGeneralType];
  }> {}
