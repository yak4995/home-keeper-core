import { IReportDefinitionDto, InputPort } from '..';
import { ID } from '../..';

export interface ReportInputPort
  extends InputPort<{
    subscribe: [{ userId: ID } & IReportDefinitionDto, object];
    unsubscribe: [{ userId: ID } & IReportDefinitionDto, object];
    getSubscriptions: [{ userId: ID }, object];
    generateReport: [{ userId: ID } & IReportDefinitionDto, object];
  }> {}
