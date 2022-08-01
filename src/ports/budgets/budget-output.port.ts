import { IBudget, IBudgetItem, IHousehold } from '@persistance';

export interface BudgetOutputPort {
  getBudgets(output: IBudget[]): Promise<any>;
  getBudgetDetails(output: IBudget): Promise<any>;
  addBudget(output: IBudget): Promise<any>;
  editBudget(output: IBudget): Promise<any>;
  addBudgetItem(output: IBudgetItem): Promise<any>;
  editBudgetItem(output: IBudgetItem): Promise<any>;
  deleteBudgetItem(output: IBudgetItem): Promise<any>;
  deleteBudget(output: IBudget): Promise<any>;
}
