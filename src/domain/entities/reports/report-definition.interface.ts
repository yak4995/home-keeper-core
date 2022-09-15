import { IPersistantEntity, IUser } from '..';
import { Period } from '../..';

export interface IReportDefinition extends IPersistantEntity {
  period: Period;
  owner: IUser;
}
