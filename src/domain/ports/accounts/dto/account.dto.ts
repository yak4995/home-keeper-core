import { Bank, ID } from '../../..';

export interface IAccountDto {
  householdId: ID;

  name: string;
  currencyId: ID;

  // The initial balance applies at the start of this calendar day.

  balanceStartOn: Date;
  initialBalance: number;
  bank: Bank;

  cardNumber?: string;
}
