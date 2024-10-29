import { IPersistantEntity, ICurrency, ILanguage, ITimezone, IHousehold, IHouseholdInvitation } from '..';
import { UserRole } from '../..';

export interface IUser extends IPersistantEntity {
  roles: UserRole[];
  timezone: ITimezone;
  lang: ILanguage;
  defaultCurrency: ICurrency;
  households: IHousehold[];
  invitations: IHouseholdInvitation[];
}
