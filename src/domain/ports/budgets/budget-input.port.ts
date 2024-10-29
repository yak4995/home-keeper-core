import { IBudgetDto, IBudgetItemDto, IIdentificationDto, InputPort, IProjectionDto } from '..';
import { IBudget, ID, IHousehold, ProjectionCriteria } from '../..';

export interface BudgetInputPort
  extends InputPort<{
    getBudgets: [{ owner: IHousehold; accountIds: ID[]; from: Date; to: Date } & IProjectionDto<IBudget>, object];
    getBudgetDetails: [IIdentificationDto & IProjectionDto<IBudget>, object];

    createBudget: [IBudgetDto, object];
    updateBudget: [IIdentificationDto & IBudgetDto, object];
    deleteBudget: [IIdentificationDto, object];

    createBudgetItem: [{ budgetId: ID } & IBudgetItemDto, object];
    updateBudgetItem: [IIdentificationDto & IBudgetItemDto, object];
    deleteBudgetItem: [IIdentificationDto, object];
  }> {}
