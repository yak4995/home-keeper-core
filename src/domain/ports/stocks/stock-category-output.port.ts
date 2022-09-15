import { IStockCategory } from '../..';

export interface StockCategoryOutputPort {
  getRootCategories(output: IStockCategory[]): Promise<any>;
  getCategoryChildren(output: IStockCategory[]): Promise<any>;
  addStockCategory(output: IStockCategory): Promise<any>;
  editStockCategory(output: IStockCategory): Promise<any>;
  deleteStockCategory(output: IStockCategory): Promise<any>;
}
