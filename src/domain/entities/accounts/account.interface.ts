import { IPersistantEntity, ICurrency, IHousehold, IBudget } from '..';

export interface IAccount extends IPersistantEntity {
  name: string;
  initialBalance: number;

  // can be system (from incoming txs)
  owner?: IHousehold;
  currency?: ICurrency;

  budgets: IBudget[];

  getBalanceForDate: (datetime: Date) => Promise<number>;
}
