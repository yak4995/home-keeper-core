import { IPersistantEntity, ITransactionCategory, IAmortizationProject } from '../..';

export interface IConsumedResourceItem extends IPersistantEntity {
  project: IAmortizationProject;
  category: ITransactionCategory;
  name: string;
  pricePerSet: number;
  countInSet: number;
  neededCountForOneItem: number;
  endDate?: Date;

  getPricePerOne: () => number;
}
