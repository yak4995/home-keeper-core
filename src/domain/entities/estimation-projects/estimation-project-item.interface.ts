import { IPersistantEntity, IEstimationProject, ICurrency, ITransactionCategory, ITransaction } from '..';

export interface IEstimationProjectItem extends IPersistantEntity {
  dedicatedSum: number;
  dedicatedTime: number;
  endDate?: Date;
  estimationProject: IEstimationProject;
  parent?: IEstimationProjectItem;
  currency: ICurrency;
  category: ITransactionCategory;
  transactions: ITransaction[];

  getEstimatedPrice: () => number;
  getEstimatedTime: () => number;
  getSpentFinanceResources: () => number;
  getSpentTime: () => number;
}
