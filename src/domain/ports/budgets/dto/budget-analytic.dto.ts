import { BudgetAnalyticType } from '../../..';
import { ID } from '../../..';

export interface IBudgetAnalyticDto {
  type: BudgetAnalyticType;
  budgetItemId: ID; // owner can be taken from here
}
