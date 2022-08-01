import { ITransactionCategory } from '@persistance';

export interface TransactionCategoryOutputPort {
  getTransactionCategoryChildren(output: ITransactionCategory[]): Promise<any>;
  getCategoryDirectChildren(output: ITransactionCategory[]): Promise<any>;
  getTopCategories(output: ITransactionCategory[]): Promise<any>;
  getOwnCategories(output: ITransactionCategory[]): Promise<any>;
  searchCategory(output: ITransactionCategory[]): Promise<any>;
  addCategory(output: ITransactionCategory): Promise<any>;
  updateCategory(output: ITransactionCategory): Promise<any>;
  deleteCategory(output: ITransactionCategory): Promise<any>;
}
