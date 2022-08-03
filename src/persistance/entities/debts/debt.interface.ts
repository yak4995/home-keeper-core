import { IPersistantEntity, IHousehold, ICurrency, ITransactionCategory } from 'persistance';

export interface IDebt extends IPersistantEntity {
  owner: IHousehold;
  name: string;
  category: ITransactionCategory;
  isCredit: boolean;
  currency: ICurrency;
  body: number;
  interest: number;
  startDate: Date;
  endOfFreePeriod?: Date;
  endDate?: Date;

  getRest: () => number;
  getFullSum: () => number;
}
