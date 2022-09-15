import { IBudget, IBudgetItem, ID, IHousehold } from '../..';
import { IBudgetDto, IBudgetItemDto } from '..';

export interface BudgetInputPort {
  getBudgets(owner: IHousehold, accountIds: ID[], from: Date, to: Date): Promise<IBudget[]>;
  getBudgetDetails(id: ID): Promise<IBudget>;
  addBudget(payload: IBudgetDto): Promise<IBudget>;
  editBudget(id: ID, payload: IBudgetDto): Promise<IBudget>;
  addBudgetItem(budgetId: ID, payload: IBudgetItemDto): Promise<IBudgetItem>;
  editBudgetItem(id: ID, payload: IBudgetItemDto): Promise<IBudgetItem>;
  deleteBudgetItem(id: ID): Promise<IBudgetItem>;
  deleteBudget(id: ID): Promise<IBudget>;
}
