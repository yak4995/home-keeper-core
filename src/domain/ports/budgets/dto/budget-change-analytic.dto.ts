import { ID, BudgetAnalyticType } from '../../..';

export interface IBudgetChangeAnalyticDto {
  // check that all budgets in sequence have the same currency
  ownerId: ID;
  // plan, difference
  type: BudgetAnalyticType;
  // for every budget in sequence all their budgetItems with this categoryId and all their children
  categoryId: ID;
  accountIds: ID[];
  from: Date;
  to: Date;
  // granularity is static and equal 1 month
}
