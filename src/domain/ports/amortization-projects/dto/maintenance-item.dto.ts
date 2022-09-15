import { Period } from '../../..';

export interface IMaintenanceItemDto {
  categoryName: string;
  period: Period;
  pricePerSet: number;
  countInSet: number;
  neededCountForOneMaintenance: number;
}
