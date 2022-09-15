import { ID } from '../../..';

export interface IEstimationItemDto {
  categoryName: string;
  currencyId: ID;
  dedicatedSum: number;
  dedicatedTime: number;
  parentId?: ID;
  endDate?: Date;
}
