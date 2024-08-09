import { OutputPort } from '..';
import { CustomGeneralType, IBudget, IBudgetItem } from '../..';

export interface BudgetOutputPort
  extends OutputPort<{
    getBudgets: [IBudget[], CustomGeneralType];
    getBudgetDetails: [IBudget, CustomGeneralType];

    createBudget: [IBudget, CustomGeneralType];
    updateBudget: [IBudget, CustomGeneralType];
    deleteBudget: [IBudget, CustomGeneralType];

    createBudgetItem: [IBudgetItem, CustomGeneralType];
    updateBudgetItem: [IBudgetItem, CustomGeneralType];
    deleteBudgetItem: [IBudgetItem, CustomGeneralType];
  }> {}
