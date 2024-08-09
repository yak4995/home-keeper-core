import { IIdentificationDto, ITransactionDto, ITransactionFilterDto, InputPort } from '..';
import { CustomGeneralType, ITransaction, OrderCriteria } from '../..';

export interface TransactionInputPort
  extends InputPort<{
    getTransactionDetails: [IIdentificationDto, CustomGeneralType];
    getTransactions: [
      {
        page: number;
        perPage: number;
        sort: OrderCriteria<ITransaction>;
        filter: ITransactionFilterDto;
      },
      CustomGeneralType,
    ];

    createTransaction: [ITransactionDto, CustomGeneralType];
    updateTransaction: [IIdentificationDto & ITransactionDto, CustomGeneralType];
    deleteTransaction: [IIdentificationDto, CustomGeneralType];
  }> {}
