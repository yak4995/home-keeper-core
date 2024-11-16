import { IIdentificationDto, IAccountDto, InputPort, IProjectionDto, IListDto } from '..';
import { IAccount } from '../..';

export interface AccountInputPort
  extends InputPort<{
    getAccounts: [IListDto<IAccount> & IProjectionDto<IAccount>, object];
    getAccountDetails: [IIdentificationDto & IProjectionDto<IAccount>, object];
    getBalance: [{ at?: Date } & IIdentificationDto, object];

    createAccount: [IAccountDto, object];
    updateAccount: [IIdentificationDto & IAccountDto, object];
    deleteAccount: [IIdentificationDto, object];
  }> {}
