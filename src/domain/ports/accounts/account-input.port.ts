import { IIdentificationDto, IAccountDto, InputPort } from '..';
import { IUser } from '../..';

export interface AccountInputPort
  extends InputPort<{
    getAccounts: [IUser, object];
    getAccountDetails: [IIdentificationDto, object];
    getBalance: [{ at?: Date } & IIdentificationDto, object];

    createAccount: [{ user: IUser } & IAccountDto, object];
    updateAccount: [IIdentificationDto & IAccountDto, object];
    deleteAccount: [IIdentificationDto, object];
  }> {}
