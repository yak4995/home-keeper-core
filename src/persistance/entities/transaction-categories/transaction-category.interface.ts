import { IPersistantEntity, IHousehold } from '../..';

export interface ITransactionCategory extends IPersistantEntity {
  name: string;
  isOutcome: boolean;
  parent?: ITransactionCategory;
  owner?: IHousehold;
}
