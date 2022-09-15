import { ID } from '../../..';

export interface ITransactionDto {
  datetime: Date;
  amount: number;
  transactionCategoryId: ID;
  currencyId: ID;
  accountId: ID;
  description: string;
}
