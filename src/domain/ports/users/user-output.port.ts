import { UserInputPort } from '../..';

export interface UserOutputPort {
  // for internal usage
  addUser<R>(output: Awaited<ReturnType<UserInputPort['addUser']>>, exception: unknown): Promise<R>;
  // mixed
  getUserById<R>(output: Awaited<ReturnType<UserInputPort['getUserById']>>, exception: unknown): Promise<R>;
  // ony for user itself
  changeProfileInfo<R>(output: Awaited<ReturnType<UserInputPort['changeProfileInfo']>>, exception: unknown): Promise<R>;
  deleteAccount<R>(output: Awaited<ReturnType<UserInputPort['deleteAccount']>>, exception: unknown): Promise<R>;
  // only for administrators
  updateUser<R>(output: Awaited<ReturnType<UserInputPort['updateUser']>>, exception: unknown): Promise<R>;
  getAllUsers<R>(output: Awaited<ReturnType<UserInputPort['getAllUsers']>>, exception: unknown): Promise<R>;
}
