import { IPersistantEntity, ISupplyList, IStockItem } from '@persistance';

export interface ISupplyListItem extends IPersistantEntity {
  isClosed: boolean;
  supplyList: ISupplyList;
  product: IStockItem;
}
