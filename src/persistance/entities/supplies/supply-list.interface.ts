import { IPersistantEntity, IHousehold } from '../..';

export interface ISupplyList extends IPersistantEntity {
  owner: IHousehold;
  isClosed: boolean;
}
