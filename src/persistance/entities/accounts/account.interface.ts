import { IPersistantEntity, ICurrency, IHousehold } from '../..';

export interface IAccount extends IPersistantEntity {
  name: string;
  initialBalance: number;
  owner: IHousehold;
  currency: ICurrency;

  getBalanceForDate: (datetime: Date) => Promise<number>;
}
