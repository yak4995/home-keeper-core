import { IIdentificationDto, ITransactionCategoryDto, InputPort } from '..';
import { ID } from '../..';

export interface TransactionCategoryInputPort
  extends InputPort<{
    getTransactionCategoryChildren: [{ ownerId: ID } & IIdentificationDto, object];
    getCategoryDirectChildren: [{ ownerId: ID } & IIdentificationDto, object];
    getTopCategories: [{ ownerId: ID }, object];
    getOwnCategories: [{ ownerId: ID }, object];
    searchCategory: [{ ownerId: ID } & IIdentificationDto, object];

    createCategory: [ITransactionCategoryDto, object];
    updateCategory: [IIdentificationDto & ITransactionCategoryDto, object];
    deleteCategory: [IIdentificationDto, object];
  }> {}
