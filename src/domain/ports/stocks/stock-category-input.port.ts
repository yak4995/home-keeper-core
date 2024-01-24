import { IStockCategoryDto, InputPort } from '..';
import { ID, IStockCategory } from '../..';

export interface StockCategoryInputPort
  extends InputPort<
    'getRootCategories' | 'getCategoryChildren' | 'addStockCategory' | 'editStockCategory' | 'deleteStockCategory'
  > {
  getRootCategories(id: ID): Promise<IStockCategory[]>;
  getCategoryChildren(id: ID): Promise<IStockCategory[]>;
  addStockCategory(payload: IStockCategoryDto): Promise<IStockCategory>;
  editStockCategory(id: ID, payload: IStockCategoryDto): Promise<IStockCategory>;
  deleteStockCategory(id: ID): Promise<IStockCategory>;
}
