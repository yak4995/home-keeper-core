import { OutputPort, ReportInputPort } from '../..';

export interface ReportOutputPort
  extends OutputPort<'subscribe' | 'unsubscribe' | 'getSubscriptions' | 'generateReport', ReportInputPort> {}
