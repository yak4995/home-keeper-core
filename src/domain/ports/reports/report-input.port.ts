import { IReportDefinitionDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface ReportInputPort
  extends InputPort<{
    subscribe: [{ userId: ID } & IReportDefinitionDto, CustomGeneralType];
    unsubscribe: [{ userId: ID } & IReportDefinitionDto, CustomGeneralType];
    getSubscriptions: [{ userId: ID }, CustomGeneralType];
    generateReport: [{ userId: ID } & IReportDefinitionDto, CustomGeneralType];
  }> {}
