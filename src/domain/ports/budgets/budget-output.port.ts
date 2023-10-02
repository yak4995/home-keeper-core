import { BudgetInputPort } from '../..';

export interface BudgetOutputPort {
  getBudgets<R>(output: Awaited<ReturnType<BudgetInputPort['getBudgets']>>, exception: unknown): Promise<R>;
  getBudgetDetails<R>(output: Awaited<ReturnType<BudgetInputPort['getBudgetDetails']>>, exception: unknown): Promise<R>;
  addBudget<R>(output: Awaited<ReturnType<BudgetInputPort['addBudget']>>, exception: unknown): Promise<R>;
  editBudget<R>(output: Awaited<ReturnType<BudgetInputPort['editBudget']>>, exception: unknown): Promise<R>;
  addBudgetItem<R>(output: Awaited<ReturnType<BudgetInputPort['addBudgetItem']>>, exception: unknown): Promise<R>;
  editBudgetItem<R>(output: Awaited<ReturnType<BudgetInputPort['editBudgetItem']>>, exception: unknown): Promise<R>;
  deleteBudgetItem<R>(output: Awaited<ReturnType<BudgetInputPort['deleteBudgetItem']>>, exception: unknown): Promise<R>;
  deleteBudget<R>(output: Awaited<ReturnType<BudgetInputPort['deleteBudget']>>, exception: unknown): Promise<R>;
}
