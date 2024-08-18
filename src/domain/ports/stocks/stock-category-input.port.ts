import { IIdentificationDto, IStockCategoryDto, InputPort } from '..';

export interface StockCategoryInputPort
  extends InputPort<{
    getRootCategories: [IIdentificationDto, object];
    getCategoryChildren: [IIdentificationDto, object];

    createStockCategory: [IStockCategoryDto, object];
    updateStockCategory: [IIdentificationDto & IStockCategoryDto, object];
    deleteStockCategory: [IIdentificationDto, object];
  }> {}
