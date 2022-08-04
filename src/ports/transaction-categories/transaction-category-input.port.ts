import { ID, ITransactionCategory } from '../../persistance';
import { ITransactionCategoryDto } from '../../ports';

export interface TransactionCategoryInputPort {
  getTransactionCategoryChildren(ownerId: ID, id: ID): Promise<ITransactionCategory[]>;
  getCategoryDirectChildren(ownerId: ID, id: ID): Promise<ITransactionCategory[]>;
  getTopCategories(ownerId: ID): Promise<ITransactionCategory[]>;
  getOwnCategories(ownerId: ID): Promise<ITransactionCategory[]>;
  searchCategory(ownerId: ID, id: ID): Promise<ITransactionCategory[]>;
  addCategory(payload: ITransactionCategoryDto): Promise<ITransactionCategory>;
  updateCategory(id: ID, payload: ITransactionCategoryDto): Promise<ITransactionCategory>;
  deleteCategory(id: ID): Promise<ITransactionCategory>;
}
