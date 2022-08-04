import { IPersistantEntity, IUser } from '../..';
import { Period } from '../../../enums';

export interface IReportDefinition extends IPersistantEntity {
  period: Period;
  owner: IUser;
}
