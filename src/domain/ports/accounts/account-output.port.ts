import { OutputPort } from '..';
import { IAccount } from '../..';

export interface AccountOutputPort
  extends OutputPort<{
    getAccounts: [IAccount[], object];
    getAccountDetails: [IAccount, object];
    getBalance: [{ result: number }, object];

    createAccount: [IAccount, object];
    updateAccount: [IAccount, object];
    deleteAccount: [IAccount, object];
  }> {}
