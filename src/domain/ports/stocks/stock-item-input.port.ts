import { ID, IStockItem } from '../..';
import { IStockItemDto } from '..';

export interface StockItemInputPort {
  getStockItemsList(ownerId: ID): Promise<IStockItem[]>;
  getStockItemsDetails(id: ID): Promise<IStockItem>;
  addStockItem(payload: IStockItemDto): Promise<IStockItem>;
  editStockItem(id: ID, payload: IStockItemDto): Promise<IStockItem>;
  deleteStockItem(id: ID): Promise<IStockItem>;
}
