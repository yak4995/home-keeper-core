import { OutputPort } from '..';
import { IBudget, IBudgetItem, ListResponse } from '../..';

export interface BudgetOutputPort
  extends OutputPort<{
    getBudgets: [ListResponse<IBudget>, object];
    getBudgetDetails: [IBudget, object];

    createBudget: [IBudget, object];
    updateBudget: [IBudget, object];
    deleteBudget: [IBudget, object];

    getBudgetItems: [ListResponse<IBudgetItem>, object];
    getBudgetItem: [IBudgetItem, object];

    createBudgetItem: [IBudgetItem, object];
    updateBudgetItem: [IBudgetItem, object];
    deleteBudgetItem: [IBudgetItem, object];
  }> {}
