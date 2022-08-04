import { ITransaction } from '../../persistance';

export interface TransactionOutputPort {
  getTransactionDetail(output: ITransaction): Promise<any>;
  getTransactions(output: ITransaction[]): Promise<any>;
  addTransaction(output: ITransaction): Promise<any>;
  updateTransaction(output: ITransaction): Promise<any>;
  deleteTransaction(output: ITransaction): Promise<any>;
}
