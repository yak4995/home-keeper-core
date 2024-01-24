import { OutputPort, TransactionInputPort } from '../..';

export interface TransactionOutputPort
  extends OutputPort<
    'getTransactionDetails' | 'getTransactions' | 'addTransaction' | 'updateTransaction' | 'deleteTransaction',
    TransactionInputPort
  > {}
