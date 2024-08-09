import { IIdentificationDto, IStockCategoryDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface StockCategoryInputPort
  extends InputPort<{
    getRootCategories: [IIdentificationDto, CustomGeneralType];
    getCategoryChildren: [IIdentificationDto, CustomGeneralType];

    createStockCategory: [IStockCategoryDto, CustomGeneralType];
    updateStockCategory: [IIdentificationDto & IStockCategoryDto, CustomGeneralType];
    deleteStockCategory: [IIdentificationDto, CustomGeneralType];
  }> {}
