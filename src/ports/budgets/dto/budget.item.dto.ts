import { ID } from '../../../persistance';

export interface IBudgetItemDto {
  categoryId: ID;
  currencyId: ID;
  dedicatedSum: number;
  parentId?: ID;
}
