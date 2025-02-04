import { IPersistantEntity, IHousehold, IBudgetItem, ICurrency } from '..';

export interface IBudget extends IPersistantEntity {
  owner: IHousehold;
  currency: ICurrency;
  items: IBudgetItem[];
  startDate: Date;
  endDate: Date;
}
