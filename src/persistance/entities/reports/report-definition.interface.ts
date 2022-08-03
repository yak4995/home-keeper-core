import { IPersistantEntity, IUser } from 'persistance';
import { Period } from 'enums';

export interface IReportDefinition extends IPersistantEntity {
  period: Period;
  owner: IUser;
}
