import { IPersistantEntity, IAccount, ICurrency, ITransactionCategory } from '../..';

export interface ITransaction extends IPersistantEntity {
  date: Date;
  amount: number;
  description?: string;
  account: IAccount;
  currency: ICurrency;
  category: ITransactionCategory;
}
