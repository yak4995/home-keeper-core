import { IPersistantEntity, IAccount, ICurrency, ITransactionCategory } from '..';

export interface ITransaction extends IPersistantEntity {
  date: Date;
  amount: number;
  currency: ICurrency;
  account: IAccount;
  transactionCategory: ITransactionCategory;
  // counterparty?: ICounterParty;
  description?: string;
}
