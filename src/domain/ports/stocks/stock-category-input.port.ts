import { ID, IStockCategory } from '../..';
import { IStockCategoryDto } from '..';

export interface StockCategoryInputPort {
  getRootCategories(id: ID): Promise<IStockCategory[]>;
  getCategoryChildren(id: ID): Promise<IStockCategory[]>;
  addStockCategory(payload: IStockCategoryDto): Promise<IStockCategory>;
  editStockCategory(id: ID, payload: IStockCategoryDto): Promise<IStockCategory>;
  deleteStockCategory(id: ID): Promise<IStockCategory>;
}
