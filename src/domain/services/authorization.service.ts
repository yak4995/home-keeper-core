import { ID } from '..';

export interface AuthorizationService {
  doesHaveAccess(userId: ID, action: string, entityType: string, entityId: string): Promise<boolean>;
}
