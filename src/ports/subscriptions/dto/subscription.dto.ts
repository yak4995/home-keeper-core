import { Period } from '../../../enums';
import { ID } from '../../../persistance';

export interface ISubscriptionDto {
  categoryName: string;
  currencyId: ID;
  amount: number;
  startDate: Date;
  endDate?: Date;
  period: Period;
}
