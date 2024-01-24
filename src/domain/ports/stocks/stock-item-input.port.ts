import { IStockItemDto, InputPort } from '..';
import { ID, IStockItem } from '../..';

export interface StockItemInputPort
  extends InputPort<
    'getStockItemsList' | 'getStockItemsDetails' | 'addStockItem' | 'editStockItem' | 'deleteStockItem'
  > {
  getStockItemsList(ownerId: ID): Promise<IStockItem[]>;
  getStockItemsDetails(id: ID): Promise<IStockItem>;
  addStockItem(payload: IStockItemDto): Promise<IStockItem>;
  editStockItem(id: ID, payload: IStockItemDto): Promise<IStockItem>;
  deleteStockItem(id: ID): Promise<IStockItem>;
}
