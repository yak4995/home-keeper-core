import { OutputPort } from '..';
import { CustomGeneralType, ITransaction } from '../..';

export interface TransactionOutputPort
  extends OutputPort<{
    getTransactionDetails: [ITransaction, CustomGeneralType];
    getTransactions: [ITransaction[], CustomGeneralType];

    createTransaction: [ITransaction, CustomGeneralType];
    updateTransaction: [ITransaction, CustomGeneralType];
    deleteTransaction: [ITransaction, CustomGeneralType];
  }> {}
