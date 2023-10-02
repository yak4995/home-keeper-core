import { DebtInputPort } from '../..';

export interface DebtOutputPort {
  getDebtsList<R>(output: Awaited<ReturnType<DebtInputPort['getDebtsList']>>, exception: unknown): Promise<R>;
  getDebtDetails<R>(output: Awaited<ReturnType<DebtInputPort['getDebtDetails']>>, exception: unknown): Promise<R>;
  addDebt<R>(output: Awaited<ReturnType<DebtInputPort['addDebt']>>, exception: unknown): Promise<R>;
  editDebt<R>(output: Awaited<ReturnType<DebtInputPort['editDebt']>>, exception: unknown): Promise<R>;
  deleteDebt<R>(output: Awaited<ReturnType<DebtInputPort['deleteDebt']>>, exception: unknown): Promise<R>;
}
