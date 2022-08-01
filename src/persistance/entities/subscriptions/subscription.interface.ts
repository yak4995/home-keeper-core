import { IPersistantEntity, IHousehold, ICurrency, ITransactionCategory } from '@persistance';
import { Period } from '@enums';

export interface ISubscription extends IPersistantEntity {
  owner: IHousehold;
  currency: ICurrency;
  category: ITransactionCategory;
  name: string;
  amount: number;
  startDate: Date;
  endDate?: Date;
  period: Period;
}
