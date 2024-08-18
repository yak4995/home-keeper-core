import { IIdentificationDto, ITransactionDto, ITransactionFilterDto, InputPort } from '..';
import { ITransaction, OrderCriteria } from '../..';

export interface TransactionInputPort
  extends InputPort<{
    getTransactionDetails: [IIdentificationDto, object];
    getTransactions: [
      {
        page: number;
        perPage: number;
        sort: OrderCriteria<ITransaction>;
        filter: ITransactionFilterDto;
      },
      object,
    ];

    createTransaction: [ITransactionDto, object];
    updateTransaction: [IIdentificationDto & ITransactionDto, object];
    deleteTransaction: [IIdentificationDto, object];
  }> {}
