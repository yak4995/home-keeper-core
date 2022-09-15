import { IPersistantEntity, ISupplyList, IStockItem } from '..';

export interface ISupplyListItem extends IPersistantEntity {
  isClosed: boolean;
  supplyList: ISupplyList;
  product: IStockItem;
}
