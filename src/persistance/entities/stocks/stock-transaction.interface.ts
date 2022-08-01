import { IPersistantEntity, IStockItem } from '@persistance';

export interface IStockTransaction extends IPersistantEntity {
  stockItem: IStockItem;
  isOutcome: boolean;
  date: Date;
  amount: number;
}
