import { Period } from '../../..';
import { ID } from '../../..';

export interface IStockItemDto {
  name: string;
  measureUnit: string;
  supplyPeriod: Period;
  typicalSupplyAmount: number;
  stockCategoryId: ID;
}
