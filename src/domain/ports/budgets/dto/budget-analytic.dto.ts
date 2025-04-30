import { BudgetAnalyticType } from '../../..';
import { ID } from '../../..';

export interface IBudgetAnalyticDto {
  // plan, difference
  type: BudgetAnalyticType;
  // owner can be taken from here
  budgetItemId: ID;
  accountIds: ID[];
}
