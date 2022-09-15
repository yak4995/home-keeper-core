import { ID } from '../../..';

export interface IStockTransactionDto {
  isOutcome: boolean;
  date: Date;
  amount: number;
  stockItemId: ID;
}
