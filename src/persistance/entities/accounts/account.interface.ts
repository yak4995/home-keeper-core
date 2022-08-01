import { IPersistantEntity, ICurrency, IHousehold } from '@persistance';

export interface IAccount extends IPersistantEntity {
  name: string;
  initialBalance: number;
  owner: IHousehold;
  currency: ICurrency;

  getBalanceForDate: (datetime: Date) => Promise<number>;
}
