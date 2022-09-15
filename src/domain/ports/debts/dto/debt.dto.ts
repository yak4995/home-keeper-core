import { ID } from '../../..';
import { IDebtPaymentDto } from '../..';

export interface IDebtDto {
  categoryName: string;
  isCredit: boolean;
  currencyId: ID;
  body: number;
  interest: number;
  startDate: Date;
  endOfFreePeriod?: Date;
  endDate?: Date;
  payments?: IDebtPaymentDto[];
}
