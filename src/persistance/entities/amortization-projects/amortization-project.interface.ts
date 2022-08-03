import { IPersistantEntity, IHousehold } from 'persistance';

export interface IAmortizationProject extends IPersistantEntity {
  owner: IHousehold;
  name: string;
  purchasePrice: number;
  dedicatedProducedItemsCount: number;
  plannedProducedItemsCountPerDay: number;

  getPricePerOne: () => number;
}
