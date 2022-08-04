import { IPersistantEntity, IHousehold, ITransactionCategory } from '../..';

export interface IEstimationProject extends IPersistantEntity {
  owner: IHousehold;
  rootCategory: ITransactionCategory;
  name: string;
  startDate: Date;
  endDate?: Date;

  getEstimatedPrice: () => number;
  getEstimatedTime: () => number;
  getSpentFinanceResources: () => number;
  getSpentTime: () => number;
}
