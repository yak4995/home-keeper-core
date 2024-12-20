import { IPersistantEntity, IHousehold } from '..';

export interface ITransactionCategory extends IPersistantEntity {
  name: string;
  isOutcome: boolean; // example of denormaliztion, we could calculte this value from is category is child of "outcome" category or no, but it requires a lot of processing, so we just store this field for every category
  parent?: ITransactionCategory;
  owner?: IHousehold;
}
