import { IIdentificationDto, IProjectionDto, ITransactionCategoryDto, InputPort } from '..';
import { ID, ITransactionCategory } from '../..';

export interface TransactionCategoryInputPort
  extends InputPort<{
    getTransactionCategoryChildren: [
      { ownerId: ID } & IIdentificationDto & IProjectionDto<ITransactionCategory>,
      object,
    ];
    getCategoryDirectChildren: [{ ownerId: ID } & IIdentificationDto & IProjectionDto<ITransactionCategory>, object];
    getTopCategories: [{ ownerId: ID } & IProjectionDto<ITransactionCategory>, object];
    getOwnCategories: [{ ownerId: ID } & IProjectionDto<ITransactionCategory>, object];
    searchCategory: [{ ownerId: ID } & IIdentificationDto & IProjectionDto<ITransactionCategory>, object];

    createCategory: [ITransactionCategoryDto, object];
    updateCategory: [IIdentificationDto & ITransactionCategoryDto, object];
    deleteCategory: [IIdentificationDto, object];
  }> {}
