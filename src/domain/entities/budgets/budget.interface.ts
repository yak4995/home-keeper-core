import { IPersistantEntity, IAccount, IHousehold, IBudgetItem } from '..';

export interface IBudget extends IPersistantEntity {
  owner: IHousehold;
  items: IBudgetItem[];
  startDate: Date;
  endDate: Date;

  getIncomesSum: () => number;
  getOutcomesSum: () => number;
  getDedicatedIncomesSum: () => number;
  getDedicatedOutcomesSum: () => number;
}
