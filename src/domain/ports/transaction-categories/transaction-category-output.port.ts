import { OutputPort } from '..';
import { ITransactionCategory } from '../..';

export interface TransactionCategoryOutputPort
  extends OutputPort<{
    getTransactionCategoryChildren: [ITransactionCategory[], object];
    getCategoryDirectChildren: [ITransactionCategory[], object];
    getTopCategories: [ITransactionCategory[], object];
    getOwnCategories: [ITransactionCategory[], object];
    searchCategory: [ITransactionCategory[], object];

    createCategory: [ITransactionCategory, object];
    updateCategory: [ITransactionCategory, object];
    deleteCategory: [ITransactionCategory, object];
  }> {}
