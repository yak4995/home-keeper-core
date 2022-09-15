import { ID, IReportDefinition } from '../..';
import { IReportDefinitionDto } from '..';

export interface ReportInputPort {
  subscribe(userId: ID, payload: IReportDefinitionDto): Promise<IReportDefinition[]>;
  unsubscribe(userId: ID, payload: IReportDefinitionDto): Promise<IReportDefinition[]>;
  getSubscriptions(userId: ID): Promise<IReportDefinition[]>;
  generateReport(userId: ID, payload: IReportDefinitionDto): Promise<any>;
}
