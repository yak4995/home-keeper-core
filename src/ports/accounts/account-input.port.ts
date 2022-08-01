import { IUser, IAccount, ID } from '@persistance';
import { IAccountDto } from '@ports';

export interface AccountInputPort {
  createAccount(user: IUser, payload: IAccountDto): Promise<IAccount>;
  getAccounts(user: IUser): Promise<IAccount[]>;
  getAccountDetails(id: ID): Promise<IAccount>;
  getBalance(id: ID, at: Date): Promise<number>;
  updateAccount(payload: IAccountDto): Promise<IAccount>;
  deleteAccount(id: ID): Promise<IAccount>;
}
