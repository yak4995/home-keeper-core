import { IPersistantEntity, ICurrency, ILanguage, ITimezone, IHousehold } from '@persistance';
import { UserRole, UserStatus } from '@enums';

export interface IUser extends IPersistantEntity {
  status: UserStatus;
  roles: UserRole[];
  timezone: ITimezone;
  lang: ILanguage;
  defaultCurrency: ICurrency;
  households: IHousehold[];
}
