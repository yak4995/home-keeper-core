import { IUser } from '../..';

// not usable for now
export interface IAuthenticationService<T extends IUser> {
  signUp(authenticationData: object): Promise<Partial<T>>;
  signIn(authenticationData: object): Promise<IUser>;
  signOut(authenticationData: object): Promise<boolean>;
  currentUser(authenticationData: Partial<T>): Promise<Partial<T>>;
}
