import { IPersistantEntity, IHousehold } from '@persistance';

export interface ITransactionCategory extends IPersistantEntity {
  name: string;
  isOutcome: boolean;
  parent?: ITransactionCategory;
  owner?: IHousehold;
}
