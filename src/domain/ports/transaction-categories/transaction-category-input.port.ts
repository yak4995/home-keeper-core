import { IIdentificationDto, ITransactionCategoryDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface TransactionCategoryInputPort
  extends InputPort<{
    getTransactionCategoryChildren: [{ ownerId: ID } & IIdentificationDto, CustomGeneralType];
    getCategoryDirectChildren: [{ ownerId: ID } & IIdentificationDto, CustomGeneralType];
    getTopCategories: [{ ownerId: ID }, CustomGeneralType];
    getOwnCategories: [{ ownerId: ID }, CustomGeneralType];
    searchCategory: [{ ownerId: ID } & IIdentificationDto, CustomGeneralType];

    createCategory: [ITransactionCategoryDto, CustomGeneralType];
    updateCategory: [IIdentificationDto & ITransactionCategoryDto, CustomGeneralType];
    deleteCategory: [IIdentificationDto, CustomGeneralType];
  }> {}
