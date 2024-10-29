import { IIdentificationDto, IAccountDto, InputPort, IProjectionDto } from '..';
import { IAccount, IUser } from '../..';

export interface AccountInputPort
  extends InputPort<{
    getAccounts: [IUser & IProjectionDto<IAccount>, object];
    getAccountDetails: [IIdentificationDto & IProjectionDto<IAccount>, object];
    getBalance: [{ at?: Date } & IIdentificationDto, object];

    createAccount: [{ user: IUser } & IAccountDto, object];
    updateAccount: [IIdentificationDto & IAccountDto, object];
    deleteAccount: [IIdentificationDto, object];
  }> {}
