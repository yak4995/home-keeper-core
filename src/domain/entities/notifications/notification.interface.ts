import { IPersistantEntity, IUser } from '..';

export interface INotification extends IPersistantEntity {
  user: IUser;
  read: boolean;
  message: string;
}
