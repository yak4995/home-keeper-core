import { ID } from '../../..';

export interface IAccountDto {
  householdId: ID;

  name: string;
  currencyId: ID;
  initialBalance: number;

  iban?: string;
  bankName?: string;
}
