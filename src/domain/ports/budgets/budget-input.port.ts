import { IBudgetDto, IBudgetItemDto, IIdentificationDto, IListDto, InputPort, IProjectionDto } from '..';
import { IBudget, IBudgetItem, ID } from '../..';

export interface BudgetInputPort
  extends InputPort<{
    getBudgets: [{ ownerId: string; from: Date; to: Date } & IProjectionDto<IBudget>, object];
    getBudgetDetails: [IIdentificationDto & IProjectionDto<IBudget>, object];

    createBudget: [IBudgetDto, object];
    updateBudget: [IIdentificationDto & IBudgetDto, object];
    deleteBudget: [IIdentificationDto, object];

    getBudgetItems: [IListDto<IBudgetItem>, object];
    getBudgetItem: [IIdentificationDto & IProjectionDto<IBudgetItem>, object];

    createBudgetItem: [{ budgetId: ID } & IBudgetItemDto, object];
    updateBudgetItem: [IIdentificationDto & IBudgetItemDto, object];
    deleteBudgetItem: [IIdentificationDto, object];
  }> {}
