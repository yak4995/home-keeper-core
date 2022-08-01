import { IPersistantEntity, ITransactionCategory, IAccount } from '@persistance';
import { AnalyticMetric } from '@enums';

export interface ITransactionsReportDefinition extends IPersistantEntity {
  metric: AnalyticMetric;
  category: ITransactionCategory;
  account?: IAccount;
}
