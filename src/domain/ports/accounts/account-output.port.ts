import { IAccount } from '../..';

export interface AccountOutputPort {
  createAccount(output: IAccount): Promise<any>;
  getAccounts(output: IAccount[]): Promise<any>;
  getAccountDetails(output: IAccount): Promise<any>;
  getBalance(output: number): Promise<number>;
  updateAccount(output: IAccount): Promise<any>;
  deleteAccount(output: IAccount): Promise<any>;
}
