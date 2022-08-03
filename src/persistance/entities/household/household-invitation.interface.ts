import { IPersistantEntity, IHousehold, IUser } from 'persistance';
import { HouseholdInvitationStatusEnum } from 'enums';

export interface IHouseholdInvitation extends IPersistantEntity {
  household: IHousehold;
  user: IUser;
  status: HouseholdInvitationStatusEnum;
}
