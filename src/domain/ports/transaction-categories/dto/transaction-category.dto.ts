import { ID } from '../../..';

export interface ITransactionCategoryDto {
  name: string;
  parentCategoryId?: ID;
  isOutcome: boolean;
  householdId?: ID;
}
