import { ID } from '../../..';

export interface ITransactionAnalyticDto {
  from: Date;
  to: Date;
  accountIds: ID[];
  currencyId: ID;
  transactionCategoryId: ID;
  counterpartyAccount?: ID;
}
