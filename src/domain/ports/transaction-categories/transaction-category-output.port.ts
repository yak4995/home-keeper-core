import { OutputPort } from '..';
import { CustomGeneralType, ITransactionCategory } from '../..';

export interface TransactionCategoryOutputPort
  extends OutputPort<{
    getTransactionCategoryChildren: [ITransactionCategory[], CustomGeneralType];
    getCategoryDirectChildren: [ITransactionCategory[], CustomGeneralType];
    getTopCategories: [ITransactionCategory[], CustomGeneralType];
    getOwnCategories: [ITransactionCategory[], CustomGeneralType];
    searchCategory: [ITransactionCategory[], CustomGeneralType];

    createCategory: [ITransactionCategory, CustomGeneralType];
    updateCategory: [ITransactionCategory, CustomGeneralType];
    deleteCategory: [ITransactionCategory, CustomGeneralType];
  }> {}
