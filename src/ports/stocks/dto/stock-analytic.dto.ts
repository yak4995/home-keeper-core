import { ID } from 'persistance';

export interface IStockAnalyticDto {
  stockCategoryId: ID; // owner can be taken from here
  isOutcome: boolean;
}
