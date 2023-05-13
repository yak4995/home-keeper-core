import { IUser } from '../..';

export interface IAuthenticationService {
  signUp(authenticationData: any): Promise<any>;
  signIn(authenticationData: any): Promise<any>;
  signOut(authenticationData: any): Promise<any>;
  currentUser(authenticationData: any): Promise<IUser>;
}
