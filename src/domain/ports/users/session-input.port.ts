import { ID } from '../..';
import { IUserCredentialDto } from '..';

export interface SessionInputPort {
  signIn(payload: IUserCredentialDto): Promise<any>;
  verifyUser(userId: ID): Promise<any>;
  signOut(userId: ID): Promise<any>;
}
