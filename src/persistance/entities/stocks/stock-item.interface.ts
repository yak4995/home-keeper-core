import { IPersistantEntity, IStockCategory } from '@persistance';
import { Period } from '@enums';

export interface IStockItem extends IPersistantEntity {
  name: string;
  measureUnit: string;
  supplyPeriod: Period;
  typicalSupplyAmount: number;
  stockCategory: IStockCategory;

  getPresentCount: () => number;
}
