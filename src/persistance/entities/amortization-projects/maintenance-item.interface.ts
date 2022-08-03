import { IPersistantEntity, ITransactionCategory, IAmortizationProject } from 'persistance';

import { Period } from 'enums';

export interface IMaintenanceItem extends IPersistantEntity {
  project: IAmortizationProject;
  category: ITransactionCategory;
  name: string;
  period: Period;
  pricePerSet: number;
  countInSet: number;
  neededCountForOneMaintenance: number;
  endDate?: Date;

  getPricePerOne: () => number;
}
