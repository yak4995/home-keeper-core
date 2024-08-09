import { IBudgetDto, IBudgetItemDto, IIdentificationDto, InputPort } from '..';
import { CustomGeneralType, ID, IHousehold } from '../..';

export interface BudgetInputPort
  extends InputPort<{
    getBudgets: [{ owner: IHousehold; accountIds: ID[]; from: Date; to: Date }, CustomGeneralType];
    getBudgetDetails: [IIdentificationDto, CustomGeneralType];

    createBudget: [IBudgetDto, CustomGeneralType];
    updateBudget: [IIdentificationDto & IBudgetDto, CustomGeneralType];
    deleteBudget: [IIdentificationDto, CustomGeneralType];

    createBudgetItem: [{ budgetId: ID } & IBudgetItemDto, CustomGeneralType];
    updateBudgetItem: [IIdentificationDto & IBudgetItemDto, CustomGeneralType];
    deleteBudgetItem: [IIdentificationDto, CustomGeneralType];
  }> {}
