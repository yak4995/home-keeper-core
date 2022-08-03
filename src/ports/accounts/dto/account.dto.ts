import { ID } from 'persistance';

export interface IAccountDto {
  name: string;
  currencyId: ID;
  householdId: ID;
  initialBalance: number;
}
