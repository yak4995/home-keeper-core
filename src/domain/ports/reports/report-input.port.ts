import { IReportDefinitionDto, InputPort } from '..';

import { ID, IReportDefinition } from '../..';

export interface ReportInputPort
  extends InputPort<'subscribe' | 'unsubscribe' | 'getSubscriptions' | 'generateReport'> {
  subscribe(userId: ID, payload: IReportDefinitionDto): Promise<IReportDefinition[]>;
  unsubscribe(userId: ID, payload: IReportDefinitionDto): Promise<IReportDefinition[]>;
  getSubscriptions(userId: ID): Promise<IReportDefinition[]>;
  generateReport<R>(userId: ID, payload: IReportDefinitionDto): Promise<R>;
}
