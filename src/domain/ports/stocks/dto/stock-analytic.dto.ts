import { ID } from '../../..';

export interface IStockAnalyticDto {
  stockCategoryId: ID; // owner can be taken from here
  isOutcome: boolean;
}
