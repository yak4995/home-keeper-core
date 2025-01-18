import { ID } from '../../..';

export interface ITransactionDto {
  date: Date;
  amount: number;
  currencyId: ID;
  accountId: ID;
  transactionCategoryId: ID;
  counterpartyAccount?: ID;
  description?: string;
}
