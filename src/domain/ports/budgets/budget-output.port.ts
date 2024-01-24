import { BudgetInputPort, OutputPort } from '..';

export interface BudgetOutputPort
  extends OutputPort<
    | 'getBudgets'
    | 'getBudgetDetails'
    | 'addBudget'
    | 'editBudget'
    | 'addBudgetItem'
    | 'editBudgetItem'
    | 'deleteBudgetItem'
    | 'deleteBudget',
    BudgetInputPort
  > {}
