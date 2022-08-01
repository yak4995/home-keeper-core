import { ID, IUser } from '@persistance';
import { IUserCredentialDto, IUserDto } from '@ports';

export interface UserInputPort {
  signUp(payload: IUserCredentialDto): Promise<IUser>;

  getAccountInfo(id: ID): Promise<IUser>;
  changeAccountInfo(id: ID, payload: IUserDto): Promise<IUser>; // particulary for admins too
  deleteAccount(id: ID): Promise<IUser>;

  // for admins
  getAllUsers(): Promise<IUser[]>;
  getUserById(id: ID): Promise<IUser>;
}
