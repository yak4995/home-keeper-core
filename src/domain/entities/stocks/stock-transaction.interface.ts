import { IPersistantEntity, IStockItem } from '..';

export interface IStockTransaction extends IPersistantEntity {
  stockItem: IStockItem;
  isOutcome: boolean;
  date: Date;
  amount: number;
}
