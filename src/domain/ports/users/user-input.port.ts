import { ID, IUser } from '../..';
import { IUserDto, IUserProfileDto } from '..';

export interface UserInputPort {
  // for internal usage
  addUser(authenticationData: Partial<IUser>): Promise<IUser>;
  // mixed
  getUserById(id: ID): Promise<IUser>;
  // ony for user itself
  changeProfileInfo(id: ID, payload: IUserProfileDto): Promise<IUser>;
  deleteAccount(id: ID): Promise<IUser>;
  // only for administrators
  updateUser(id: ID, payload: IUserDto): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
}
