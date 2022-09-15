import { Period } from '../../..';
import { ID } from '../../..';

export interface ISubscriptionDto {
  categoryName: string;
  currencyId: ID;
  amount: number;
  startDate: Date;
  endDate?: Date;
  period: Period;
}
