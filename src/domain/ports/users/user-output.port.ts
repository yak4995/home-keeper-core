import { IUser } from '../..';

export interface UserOutputPort {
  // for internal usage
  addUser(output: IUser): Promise<any>;
  // mixed
  getUserById(output: IUser): Promise<any>;
  // ony for user itself
  changeProfileInfo(output: IUser): Promise<any>;
  deleteAccount(output: IUser): Promise<any>;
  // only for administrators
  updateUser(output: IUser): Promise<any>;
  getAllUsers(output: IUser[]): Promise<any>;
}
