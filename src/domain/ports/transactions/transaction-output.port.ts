import { OutputPort } from '..';
import { ITransaction, ListResponse } from '../..';

export interface TransactionOutputPort
  extends OutputPort<{
    getTransactionDetails: [ITransaction, object];
    getTransactions: [ListResponse<ITransaction>, object];

    createTransaction: [ITransaction, object];
    updateTransaction: [ITransaction, object];
    deleteTransaction: [ITransaction, object];
  }> {}
