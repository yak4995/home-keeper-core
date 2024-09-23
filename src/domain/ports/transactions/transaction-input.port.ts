import { IIdentificationDto, ITransactionDto, ITransactionFilterDto, InputPort } from '..';
import { ITransaction } from '../..';
import { IListDto } from '../list.dto';

export interface TransactionInputPort
  extends InputPort<{
    getTransactionDetails: [IIdentificationDto, object];
    getTransactions: [IListDto<ITransaction>, object];

    createTransaction: [ITransactionDto, object];
    updateTransaction: [IIdentificationDto & ITransactionDto, object];
    deleteTransaction: [IIdentificationDto, object];
  }> {}
