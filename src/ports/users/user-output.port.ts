import { IUser } from 'persistance';

export interface UserOutputPort {
  signUp(output: IUser): Promise<any>;

  getAccountInfo(output: IUser): Promise<any>;
  changeAccountInfo(output: IUser): Promise<any>; // particulary for admins too
  deleteAccount(output: IUser): Promise<any>;

  // for admins
  getAllUsers(output: IUser[]): Promise<any>;
  getUserById(output: IUser): Promise<any>;
}
