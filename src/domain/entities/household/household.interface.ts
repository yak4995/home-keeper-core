import { IPersistantEntity, IHouseholdInvitation, IUser } from '..';

export interface IHousehold extends IPersistantEntity {
  name: string;
  isOwn: boolean;
  invitations: IHouseholdInvitation[];
  members: IUser[];
}
