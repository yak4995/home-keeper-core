import { IPersistantEntity, IHousehold } from '@persistance';

export interface ISupplyList extends IPersistantEntity {
  owner: IHousehold;
  isClosed: boolean;
}
