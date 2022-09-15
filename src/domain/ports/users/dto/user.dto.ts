import { UserStatus } from '../../..';
import { ID } from '../../..';

export interface IUserDto {
  name?: string;
  profileImageUrl?: string;
  status?: UserStatus;
  timezoneID?: ID;
  langId?: ID;
}
