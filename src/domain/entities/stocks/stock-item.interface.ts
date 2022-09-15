import { IPersistantEntity, IStockCategory } from '..';
import { Period } from '../..';

export interface IStockItem extends IPersistantEntity {
  name: string;
  measureUnit: string;
  supplyPeriod: Period;
  typicalSupplyAmount: number;
  stockCategory: IStockCategory;

  getPresentCount: () => number;
}
