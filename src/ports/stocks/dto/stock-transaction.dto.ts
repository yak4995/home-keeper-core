import { ID } from 'persistance';

export interface IStockTransactionDto {
  isOutcome: boolean;
  date: Date;
  amount: number;
  stockItemId: ID;
}
