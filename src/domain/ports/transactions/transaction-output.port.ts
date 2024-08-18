import { OutputPort } from '..';
import { ITransaction } from '../..';

export interface TransactionOutputPort
  extends OutputPort<{
    getTransactionDetails: [ITransaction, object];
    getTransactions: [ITransaction[], object];

    createTransaction: [ITransaction, object];
    updateTransaction: [ITransaction, object];
    deleteTransaction: [ITransaction, object];
  }> {}
