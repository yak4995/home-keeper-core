import { IPersistantEntity, IHouseholdInvitation, IUser } from '@persistance';

export interface IHousehold extends IPersistantEntity {
  name: string;
  isOwn: boolean;
  invitations: IHouseholdInvitation[];
  members: IUser[];
}
