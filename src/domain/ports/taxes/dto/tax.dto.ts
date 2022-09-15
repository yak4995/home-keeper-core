import { Period, TaxType, ID } from '../../..';

export interface ITaxDto {
  name: string;
  type: TaxType;
  amount?: number;
  percent?: number;
  taxedCategoryId?: ID;
  accountIds?: ID[];
  dayOfReportSend: number;
  dayOfPayment: number;
  period: Period;
  startDate: Date;
  endDate?: Date;
}
