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

    // from system:
    getByOwnerIds: [{ ownerIds: ID[] } & IProjectionDto<IBudget>, object];
    /*
      This is used in the context of a saga to restore budgets and budget items
      that were deleted as part of a larger operation
      that failed and needs to be rolled back.
    */
    restoreBudgets: [{ budgets: IBudget[] }, void];
    /*
      This is used in the context of a saga to restore budget items
      that were deleted as part of a larger operation
      that failed and needs to be rolled back.
    */
    restoreBudgetItems: [{ items: IBudgetItem[] }, void];
  }> {}
