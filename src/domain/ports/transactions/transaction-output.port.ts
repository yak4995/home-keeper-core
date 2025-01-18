import { OutputPort } from '..';
import { ITransaction, ListResponse } from '../..';

export interface TransactionOutputPort
  extends OutputPort<{
    getTransactionDetails: [ITransaction, object];
    getTransactions: [ListResponse<ITransaction>, object];
    getConvertedTransactions: [ListResponse<ITransaction>, object];

    createTransaction: [ITransaction, object];
    updateTransaction: [ITransaction, object];
    deleteTransaction: [ITransaction, object];

    batchCreateTransactions: [ListResponse<ITransaction>, object];
    batchUpdateTransactions: [ListResponse<ITransaction>, object];
    batchDeleteTransactions: [ListResponse<ITransaction>, object];

    syncRate: [{ result: boolean }, object];
  }> {}
