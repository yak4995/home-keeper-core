import { IPersistantEntity, ICurrency, IHousehold, IBudget } from '..';

export interface IAccount extends IPersistantEntity {
  name: string;
  currency: ICurrency;
  initialBalance: number;
  owner: IHousehold;

  iban?: string;
  bankName?: string;
}
