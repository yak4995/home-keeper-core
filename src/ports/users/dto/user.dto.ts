import { UserStatus } from 'enums';
import { ID } from 'persistance';

export interface IUserDto {
  name?: string;
  profileImageUrl?: string;
  status?: UserStatus;
  timezoneID?: ID;
  langId?: ID;
}
