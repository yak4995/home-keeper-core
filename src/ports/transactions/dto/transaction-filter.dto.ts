import { ID } from 'persistance';

export interface ITransactionFilterDto {
  householdId: ID;
  from?: Date;
  to?: Date;
  categoryId?: ID;
  currencyId?: ID;
  accountId?: ID;
  content?: string;
}
