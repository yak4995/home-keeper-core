import { IIdentificationDto, IProjectionDto, ITransactionCategoryDto, InputPort } from '..';
import { ID, ITransactionCategory } from '../..';

export interface TransactionCategoryInputPort
  extends InputPort<{
    getTopCategories: [{}, object];
    getTransactionCategoryDirectChildren: [{ ownerIds?: ID[] } & IIdentificationDto, object];
    getTransactionCategoryAllChildren: [{ ownerIds?: ID[] } & IIdentificationDto, object];

    list: [{ ownerIds?: ID[] } & IProjectionDto<ITransactionCategory>, object];
    search: [{ ownerIds?: ID[]; name?: string } & IProjectionDto<ITransactionCategory>, object];
    getById: [IIdentificationDto & IProjectionDto<ITransactionCategory>, object];

    createCategory: [ITransactionCategoryDto, object];
    updateCategory: [IIdentificationDto & ITransactionCategoryDto, object];
    deleteCategory: [IIdentificationDto, object];

    // from system:
    getByIds: [{ ids: ID[] } & IProjectionDto<ITransactionCategory>, object];
    getByOwnerIds: [{ ownerIds: ID[] } & IProjectionDto<ITransactionCategory>, object];
    /*
      This is used in the context of a saga to restore transaction categories
      that were deleted as part of a larger operation
      that failed and needs to be rolled back.
    */
    restoreCategories: [{ categories: ITransactionCategory[] }, void];
  }> {}
