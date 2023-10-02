import { TransactionCategoryInputPort } from '../..';

export interface TransactionCategoryOutputPort {
  getTransactionCategoryChildren<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['getTransactionCategoryChildren']>>,
    exception: unknown,
  ): Promise<R>;
  getCategoryDirectChildren<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['getCategoryDirectChildren']>>,
    exception: unknown,
  ): Promise<R>;
  getTopCategories<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['getTopCategories']>>,
    exception: unknown,
  ): Promise<R>;
  getOwnCategories<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['getOwnCategories']>>,
    exception: unknown,
  ): Promise<R>;
  searchCategory<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['searchCategory']>>,
    exception: unknown,
  ): Promise<R>;
  addCategory<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['addCategory']>>,
    exception: unknown,
  ): Promise<R>;
  updateCategory<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['updateCategory']>>,
    exception: unknown,
  ): Promise<R>;
  deleteCategory<R>(
    output: Awaited<ReturnType<TransactionCategoryInputPort['deleteCategory']>>,
    exception: unknown,
  ): Promise<R>;
}
