import { CustomRecord, IUser } from '../..';

export interface IAuthenticationService<T extends IUser> {
  signUp(authenticationData: CustomRecord): Promise<Partial<T>>;
  signIn(authenticationData: CustomRecord): Promise<IUser>;
  signOut(authenticationData: CustomRecord): Promise<boolean>;
  currentUser(authenticationData: Partial<T>): Promise<Partial<T>>;
}
