import { IPersistantEntity, IHousehold } from '../..';

export interface IAmortizationProject extends IPersistantEntity {
  owner: IHousehold;
  name: string;
  purchasePrice: number;
  dedicatedProducedItemsCount: number;
  plannedProducedItemsCountPerDay: number;

  getPricePerOne: () => number;
}
