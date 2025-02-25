import { Bank, ID } from '../../..';

export interface IAccountDto {
  householdId: ID;

  name: string;
  currencyId: ID;
  initialBalance: number;
  bank: Bank;

  iban?: string;
}
