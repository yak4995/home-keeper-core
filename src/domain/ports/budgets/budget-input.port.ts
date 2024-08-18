import { IBudgetDto, IBudgetItemDto, IIdentificationDto, InputPort } from '..';
import { ID, IHousehold } from '../..';

export interface BudgetInputPort
  extends InputPort<{
    getBudgets: [{ owner: IHousehold; accountIds: ID[]; from: Date; to: Date }, object];
    getBudgetDetails: [IIdentificationDto, object];

    createBudget: [IBudgetDto, object];
    updateBudget: [IIdentificationDto & IBudgetDto, object];
    deleteBudget: [IIdentificationDto, object];

    createBudgetItem: [{ budgetId: ID } & IBudgetItemDto, object];
    updateBudgetItem: [IIdentificationDto & IBudgetItemDto, object];
    deleteBudgetItem: [IIdentificationDto, object];
  }> {}
