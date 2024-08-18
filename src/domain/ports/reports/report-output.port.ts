import { OutputPort } from '..';
import { IReportDefinition } from '../..';

export interface ReportOutputPort
  extends OutputPort<{
    subscribe: [IReportDefinition[], object];
    unsubscribe: [IReportDefinition[], object];
    getSubscriptions: [IReportDefinition[], object];
    generateReport: [object, object];
  }> {}
