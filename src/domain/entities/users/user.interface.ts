import { IPersistantEntity, ICurrency, ILanguage, ITimezone, IHousehold } from '..';
import { UserRole } from '../..';

export interface IUser extends IPersistantEntity {
  roles: UserRole[];
  timezone: ITimezone;
  lang: ILanguage;
  defaultCurrency: ICurrency;
  households: IHousehold[];
}
