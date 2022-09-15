import { IPersistantEntity, IHousehold, IUser } from '..';
import { HouseholdInvitationStatusEnum } from '../..';

export interface IHouseholdInvitation extends IPersistantEntity {
  household: IHousehold;
  user: IUser;
  status: HouseholdInvitationStatusEnum;
}
