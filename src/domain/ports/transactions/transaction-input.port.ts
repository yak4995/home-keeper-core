import { IIdentificationDto, IProjectionDto, ITransactionDto, InputPort } from '..';
import { ITransaction } from '../..';
import { IListDto } from '../list.dto';

export interface TransactionInputPort
  extends InputPort<{
    getTransactionDetails: [IIdentificationDto & IProjectionDto<ITransaction>, object];
    getTransactions: [IListDto<ITransaction>, object];

    createTransaction: [ITransactionDto, object];
    updateTransaction: [IIdentificationDto & ITransactionDto, object];
    deleteTransaction: [IIdentificationDto, object];
  }> {}
