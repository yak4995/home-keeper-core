import { IPersistantEntity, IUser, ITransactionCategory, IAccount } from '..';
import { TaxType, Period } from '../..';

export interface ITax extends IPersistantEntity {
  owner: IUser;
  name: string;
  type: TaxType;
  taxedCategory?: ITransactionCategory;
  accounts: IAccount[];
  amount?: number;
  percent?: number;
  dayOfReportSend: number;
  dayOfPayment: number;
  period: Period;
  startDate: Date;
  endDate?: Date;

  getCurrentAccumulatedTaxDebt: () => number;
}
