import { ID } from '../../../persistance';

export interface ITransactionAnalyticDto {
  currencyId: ID;
  categoryId?: ID;
  accountId?: ID;
}
