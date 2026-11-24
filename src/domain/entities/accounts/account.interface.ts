import { IPersistantEntity, ICurrency, IHousehold } from '..';
import { Bank } from '../..';

export interface IAccount extends IPersistantEntity {
  name: string;
  currency: ICurrency;

  // The initial balance applies at the start of this calendar day.
  balanceStartOn: Date;

  initialBalance: number;
  owner: IHousehold;
  bank: Bank;

  cardNumber?: string;
}
