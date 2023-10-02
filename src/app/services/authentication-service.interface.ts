import { IUser } from '../..';

export interface IAuthenticationService<T extends IUser> {
  signUp<I>(authenticationData: I): Promise<Partial<T>>;
  signIn<I, R>(authenticationData: I): Promise<R>;
  signOut<I>(authenticationData: I): Promise<boolean>;
  currentUser(authenticationData: Partial<T>): Promise<Partial<T>>;
}
