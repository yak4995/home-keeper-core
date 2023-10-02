import { TransactionInputPort } from '../..';

export interface TransactionOutputPort {
  getTransactionDetails<R>(
    output: Awaited<ReturnType<TransactionInputPort['getTransactionDetails']>>,
    exception: unknown,
  ): Promise<R>;
  getTransactions<R>(
    output: Awaited<ReturnType<TransactionInputPort['getTransactions']>>,
    exception: unknown,
  ): Promise<R>;
  addTransaction<R>(
    output: Awaited<ReturnType<TransactionInputPort['addTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  updateTransaction<R>(
    output: Awaited<ReturnType<TransactionInputPort['updateTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  deleteTransaction<R>(
    output: Awaited<ReturnType<TransactionInputPort['deleteTransaction']>>,
    exception: unknown,
  ): Promise<R>;
}
