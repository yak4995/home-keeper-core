import { ID } from '@persistance';
import { IUserCredentialDto } from '@ports';

export interface SessionInputPort {
  signIn(payload: IUserCredentialDto): Promise<any>;
  verifyUser(userId: ID): Promise<any>;
  signOut(userId: ID): Promise<any>;
}
