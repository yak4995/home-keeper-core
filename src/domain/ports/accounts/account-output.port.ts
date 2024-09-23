import { OutputPort } from '..';
import { IAccount, ListResponse } from '../..';

export interface AccountOutputPort
  extends OutputPort<{
    getAccounts: [ListResponse<IAccount>, object];
    getAccountDetails: [IAccount, object];
    getBalance: [{ result: number }, object];

    createAccount: [IAccount, object];
    updateAccount: [IAccount, object];
    deleteAccount: [IAccount, object];
  }> {}
