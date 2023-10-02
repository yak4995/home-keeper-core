import { ReportInputPort } from '../..';

export interface ReportOutputPort {
  subscribe<R>(output: Awaited<ReturnType<ReportInputPort['subscribe']>>, exception: unknown): Promise<R>;
  unsubscribe<R>(output: Awaited<ReturnType<ReportInputPort['unsubscribe']>>, exception: unknown): Promise<R>;
  getSubscriptions<R>(output: Awaited<ReturnType<ReportInputPort['getSubscriptions']>>, exception: unknown): Promise<R>;
  generateReport<R>(output: Awaited<ReturnType<ReportInputPort['generateReport']>>, exception: unknown): Promise<R>;
}
