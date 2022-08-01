import { Period } from '@enums';
import { ID } from '@persistance';

export interface IStockItemDto {
  name: string;
  measureUnit: string;
  supplyPeriod: Period;
  typicalSupplyAmount: number;
  stockCategoryId: ID;
}
