import { OutputPort } from '..';
import { CustomGeneralType, IReportDefinition } from '../..';

export interface ReportOutputPort
  extends OutputPort<{
    subscribe: [IReportDefinition[], CustomGeneralType];
    unsubscribe: [IReportDefinition[], CustomGeneralType];
    getSubscriptions: [IReportDefinition[], CustomGeneralType];
    generateReport: [CustomGeneralType, CustomGeneralType];
  }> {}
