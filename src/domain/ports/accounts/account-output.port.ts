import { AccountInputPort } from '../..';

export interface AccountOutputPort {
  createAccount<R>(output: Awaited<ReturnType<AccountInputPort['createAccount']>>, exception: unknown): Promise<R>;
  getAccounts<R>(output: Awaited<ReturnType<AccountInputPort['getAccounts']>>, exception: unknown): Promise<R>;
  getAccountDetails<R>(
    output: Awaited<ReturnType<AccountInputPort['getAccountDetails']>>,
    exception: unknown,
  ): Promise<R>;
  getBalance<R>(output: Awaited<ReturnType<AccountInputPort['getBalance']>>, exception: unknown): Promise<R>;
  updateAccount<R>(output: Awaited<ReturnType<AccountInputPort['updateAccount']>>, exception: unknown): Promise<R>;
  deleteAccount<R>(output: Awaited<ReturnType<AccountInputPort['deleteAccount']>>, exception: unknown): Promise<R>;
}
