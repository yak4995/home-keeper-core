import { IPersistantEntity, IHousehold } from '@persistance';

export interface IStockCategory extends IPersistantEntity {
  owner: IHousehold;
  parent?: IStockCategory;
  name: string;
}
