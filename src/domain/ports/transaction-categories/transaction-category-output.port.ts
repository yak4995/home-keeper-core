import { OutputPort } from '..';
import { ITransactionCategory, ListResponse } from '../..';

export interface TransactionCategoryOutputPort
  extends OutputPort<{
    getTransactionCategoryChildren: [ListResponse<ITransactionCategory>, object];
    getCategoryDirectChildren: [ListResponse<ITransactionCategory>, object];
    getTopCategories: [ListResponse<ITransactionCategory>, object];
    getOwnCategories: [ListResponse<ITransactionCategory>, object];
    searchCategory: [ListResponse<ITransactionCategory>, object];

    createCategory: [ITransactionCategory, object];
    updateCategory: [ITransactionCategory, object];
    deleteCategory: [ITransactionCategory, object];
  }> {}
