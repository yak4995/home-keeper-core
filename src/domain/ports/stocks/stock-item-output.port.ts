import { IStockItem } from '../..';

export interface StockItemOutputPort {
  getStockItemsList(output: IStockItem[]): Promise<any>;
  getStockItemsDetails(output: IStockItem): Promise<any>;
  addStockItem(output: IStockItem): Promise<any>;
  editStockItem(output: IStockItem): Promise<any>;
  deleteStockItem(output: IStockItem): Promise<any>;
}
