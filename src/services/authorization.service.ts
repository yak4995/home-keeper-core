import { ID } from 'persistance';

export interface AuthorizationService {
  doesHaveAccess(userId: ID, action: string, entityType: string, entityId: string): Promise<boolean>;
}
