import { ID } from '../../..';

export interface ITransactionFilterDto {
  householdId: ID;
  from?: Date;
  to?: Date;
  categoryId?: ID;
  currencyId?: ID;
  accountId?: ID;
  content?: string;
}
