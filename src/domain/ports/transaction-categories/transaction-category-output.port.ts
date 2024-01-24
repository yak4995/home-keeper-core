import { OutputPort, TransactionCategoryInputPort } from '../..';

export interface TransactionCategoryOutputPort
  extends OutputPort<
    | 'getTransactionCategoryChildren'
    | 'getCategoryDirectChildren'
    | 'getTopCategories'
    | 'getOwnCategories'
    | 'searchCategory'
    | 'addCategory'
    | 'updateCategory'
    | 'deleteCategory',
    TransactionCategoryInputPort
  > {}
