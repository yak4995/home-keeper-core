import { IIdentificationDto, IProjectionDto, ITransactionDto, InputPort } from '..';
import { FilterCriteria, ID, ITransaction } from '../..';
import { IListDto } from '../list.dto';

export interface TransactionInputPort
  extends InputPort<{
    getTransactionDetails: [IIdentificationDto & IProjectionDto<ITransaction>, object];
    getTransactions: [IListDto<ITransaction>, object];
    getConvertedTransactions: [IListDto<ITransaction> & { targetCurrency: ID }, object];

    createTransaction: [ITransactionDto, object];
    updateTransaction: [IIdentificationDto & ITransactionDto, object];
    deleteTransaction: [IIdentificationDto, object];

    batchCreateTransactions: [{ data: ITransactionDto[] }, object];
    batchUpdateTransactions: [
      { data: Omit<IIdentificationDto & ITransactionDto, 'transactionCategoryId'>[] } & Pick<
        ITransactionDto,
        'transactionCategoryId'
      >,
      object,
    ];
    batchDeleteTransactions: [FilterCriteria<ITransaction>, object];

    syncRate: [
      {
        from: ID;
        to: ID;
        forDate: Date;
        rate: number;
      },
      object,
    ];
  }> {}
