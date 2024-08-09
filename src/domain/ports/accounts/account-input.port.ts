import { IIdentificationDto, IAccountDto, InputPort } from '..';
import { IUser, CustomGeneralType } from '../..';

export interface AccountInputPort
  extends InputPort<{
    getAccounts: [IUser, CustomGeneralType];
    getAccountDetails: [IIdentificationDto, CustomGeneralType];
    getBalance: [{ at?: Date } & IIdentificationDto, CustomGeneralType];

    createAccount: [{ user: IUser } & IAccountDto, CustomGeneralType];
    updateAccount: [IIdentificationDto & IAccountDto, CustomGeneralType];
    deleteAccount: [IIdentificationDto, CustomGeneralType];
  }> {}
