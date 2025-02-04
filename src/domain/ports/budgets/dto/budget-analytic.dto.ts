import { BudgetAnalyticType } from '../../..';
import { ID } from '../../..';

// max diff, min diff, budget ratio, budget change
export interface IBudgetAnalyticDto {
  // plan, difference
  type: BudgetAnalyticType;
  budgetItemId: ID; // owner can be taken from here
}
