import { IUser } from '..';
import { SystemOpts } from '../../app';

export interface AuthorizationService {
  doesHaveAccess(user: IUser, action: string, payload: object, { trace }: SystemOpts): Promise<void>;
}
