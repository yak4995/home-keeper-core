import { Period } from 'enums';
import { ID } from 'persistance';

export interface IReportDefinitionDto {
  period: Period;
  userId: ID;
}
