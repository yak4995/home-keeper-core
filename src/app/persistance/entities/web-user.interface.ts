import { IUser } from '../../../domain/entities';

export interface IWebUser extends IUser {
  email: string;
  name?: string;
}
