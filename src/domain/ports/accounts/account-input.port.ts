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
    /*
      This is used in the context of a saga to restore accounts
      that were deleted as part of a larger operation
      that failed and needs to be rolled back.
    */
    restoreAccounts: [{ accounts: IAccount[] }, void];
  }> {}
