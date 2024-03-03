import { IUserDto, IUserProfileDto, InputPort } from '..';
import { CustomRecord, ID, IUser } from '../..';

export interface UserInputPort
  extends InputPort<'addUser' | 'getUserById' | 'changeProfileInfo' | 'deleteAccount' | 'updateUser' | 'getAllUsers'> {
  // for internal usage
  addUser(authenticationData: CustomRecord): Promise<IUser>;
  // mixed
  getUserById(id: ID): Promise<IUser>;
  // ony for user itself
  changeProfileInfo(id: ID, payload: IUserProfileDto): Promise<IUser>;
  deleteAccount(id: ID): Promise<IUser>;
  // only for administrators
  updateUser(id: ID, payload: IUserDto): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
}
