import { IPersistantEntity, IHousehold } from '..';

export interface IStockCategory extends IPersistantEntity {
  owner: IHousehold;
  parent?: IStockCategory;
  name: string;
}
