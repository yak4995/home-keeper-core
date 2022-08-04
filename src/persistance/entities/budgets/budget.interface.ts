import { IPersistantEntity, IAccount, IHousehold } from '../..';

export interface IBudget extends IPersistantEntity {
  owner: IHousehold;
  accounts: IAccount[];
  startDate: Date;

  getIncomesSum: () => number;
  getOutcomesSum: () => number;
  getDedicatedIncomesSum: () => number;
  getDedicatedOutcomesSum: () => number;
}
