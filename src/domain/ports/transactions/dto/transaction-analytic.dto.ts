import { ID } from '../../..';

export interface ITransactionAnalyticDto {
  from: Date;
  to: Date;
  accountIds: ID[];
  currencyId: ID;
  transactionCategoryId: ID;
  // Internal budget breakdowns can request transactions assigned directly to a category.
  includeDescendants?: boolean;
  // counterpartyId?: ID;
}
