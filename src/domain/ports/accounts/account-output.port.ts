import { AccountInputPort, OutputPort } from '../..';

export interface AccountOutputPort
  extends OutputPort<
    'createAccount' | 'getAccounts' | 'getAccountDetails' | 'getBalance' | 'updateAccount' | 'deleteAccount',
    AccountInputPort
  > {}
