import { IPersistantEntity, IAccount, IHousehold } from 'persistance';

export interface IBudget extends IPersistantEntity {
  owner: IHousehold;
  accounts: IAccount[];
  startDate: Date;

  getIncomesSum: () => number;
  getOutcomesSum: () => number;
  getDedicatedIncomesSum: () => number;
  getDedicatedOutcomesSum: () => number;
}
