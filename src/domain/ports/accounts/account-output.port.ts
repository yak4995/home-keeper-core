import { OutputPort } from '..';
import { CustomGeneralType, IAccount } from '../..';

export interface AccountOutputPort
  extends OutputPort<{
    getAccounts: [IAccount[], CustomGeneralType];
    getAccountDetails: [IAccount, CustomGeneralType];
    getBalance: [number, CustomGeneralType];

    createAccount: [IAccount, CustomGeneralType];
    updateAccount: [IAccount, CustomGeneralType];
    deleteAccount: [IAccount, CustomGeneralType];
  }> {}
