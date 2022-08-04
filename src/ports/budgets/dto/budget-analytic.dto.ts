import { BudgetAnalyticType } from '../../../enums';
import { ID } from '../../../persistance';

export interface IBudgetAnalyticDto {
  type: BudgetAnalyticType;
  budgetItemId: ID; // owner can be taken from here
}
