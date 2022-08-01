import { ID, IStockItem } from '@persistance';
import { IStockItemDto } from '@ports';

export interface StockItemInputPort {
  getStockItemsList(ownerId: ID): Promise<IStockItem[]>;
  getStockItemsDetails(id: ID): Promise<IStockItem>;
  addStockItem(payload: IStockItemDto): Promise<IStockItem>;
  editStockItem(id: ID, payload: IStockItemDto): Promise<IStockItem>;
  deleteStockItem(id: ID): Promise<IStockItem>;
}
