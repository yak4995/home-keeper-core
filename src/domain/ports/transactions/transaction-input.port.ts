import { ITransactionDto, ITransactionFilterDto, InputPort } from '..';
import { ID, ITransaction, OrderCriteria } from '../..';

export interface TransactionInputPort
  extends InputPort<
    'getTransactionDetails' | 'getTransactions' | 'addTransaction' | 'updateTransaction' | 'deleteTransaction'
  > {
  getTransactionDetails(id: ID): Promise<ITransaction>;
  getTransactions(
    page: number,
    perPage: number,
    sort: OrderCriteria<ITransaction>,
    filter: ITransactionFilterDto,
  ): Promise<ITransaction[]>;
  addTransaction(payload: ITransactionDto): Promise<ITransaction>;
  updateTransaction(id: ID, payload: ITransactionDto): Promise<ITransaction>;
  deleteTransaction(id: ID): Promise<ITransaction>;
}
