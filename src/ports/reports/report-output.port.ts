import { IReportDefinition } from '../../persistance';

export interface ReportOutputPort {
  subscribe(output: IReportDefinition[]): Promise<any>;
  unsubscribe(output: IReportDefinition[]): Promise<any>;
  getSubscriptions(output: IReportDefinition[]): Promise<any>;
  generateReport(output: any): Promise<any>;
}
