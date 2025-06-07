import { OutputPort } from '..';
import { ITransactionCategory, ListResponse } from '../..';

export interface TransactionCategoryOutputPort
  extends OutputPort<{
    getTopCategories: [ITransactionCategory[], object];
    getTransactionCategoryDirectChildren: [ListResponse<ITransactionCategory>, object];
    getTransactionCategoryAllChildren: [ListResponse<ITransactionCategory>, object];

    list: [ListResponse<ITransactionCategory>, object];
    search: [ListResponse<ITransactionCategory>, object];
    getById: [ITransactionCategory, object];

    createCategory: [ITransactionCategory, object];
    updateCategory: [ITransactionCategory, object];
    deleteCategory: [ITransactionCategory, object];

    // from system:
    getByIds: [ITransactionCategory[], object];
    getByOwnerIds: [ITransactionCategory[], object];
  }> {}
