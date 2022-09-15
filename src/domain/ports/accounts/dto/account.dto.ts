import { ID } from '../../..';

export interface IAccountDto {
  name: string;
  currencyId: ID;
  householdId: ID;
  initialBalance: number;
}
