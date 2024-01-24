import { IAccountDto, InputPort } from '..';

import { IUser, IAccount, ID } from '../..';

export interface AccountInputPort
  extends InputPort<
    'createAccount' | 'getAccounts' | 'getAccountDetails' | 'getBalance' | 'updateAccount' | 'deleteAccount'
  > {
  createAccount(user: IUser, payload: IAccountDto): Promise<IAccount>;
  getAccounts(user: IUser): Promise<IAccount[]>;
  getAccountDetails(id: ID): Promise<IAccount>;
  getBalance(id: ID, at: Date): Promise<number>;
  updateAccount(payload: IAccountDto): Promise<IAccount>;
  deleteAccount(id: ID): Promise<IAccount>;
}
