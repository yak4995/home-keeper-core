import { ID, ITransaction, OrderCriteria } from '../../persistance';
import { ITransactionDto, ITransactionFilterDto } from '../../ports';

export interface TransactionInputPort {
  getTransactionDetail(id: ID): Promise<ITransaction>;
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
