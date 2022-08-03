import { ID } from 'persistance';

export interface ITransactionDto {
  datetime: Date;
  amount: number;
  transactionCategoryId: ID;
  currencyId: ID;
  accountId: ID;
  description: string;
}
