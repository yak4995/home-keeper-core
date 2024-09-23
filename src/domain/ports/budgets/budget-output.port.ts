import { OutputPort } from '..';
import { IBudget, IBudgetItem, ListResponse } from '../..';

export interface BudgetOutputPort
  extends OutputPort<{
    getBudgets: [ListResponse<IBudget>, object];
    getBudgetDetails: [IBudget, object];

    createBudget: [IBudget, object];
    updateBudget: [IBudget, object];
    deleteBudget: [IBudget, object];

    createBudgetItem: [IBudgetItem, object];
    updateBudgetItem: [IBudgetItem, object];
    deleteBudgetItem: [IBudgetItem, object];
  }> {}
