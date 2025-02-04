import { ID } from '../../..';

// count, sum, ratio, change
export interface IStockAnalyticDto {
  stockCategoryId: ID; // owner can be taken from here
  isOutcome: boolean;
}
