import { ID } from '../../../persistance';

export interface ITransactionCategoryDto {
  name: string;
  parentCategoryId?: ID;
  isOutcome: boolean;
  householdId?: ID;
}
