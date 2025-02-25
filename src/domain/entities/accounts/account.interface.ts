import { IPersistantEntity, ICurrency, IHousehold } from '..';
import { Bank } from '../..';

export interface IAccount extends IPersistantEntity {
  name: string;
  currency: ICurrency;
  initialBalance: number;
  owner: IHousehold;
  bank: Bank;

  iban?: string;
}
