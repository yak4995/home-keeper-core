import { ID } from '../../..';

export interface IBudgetItemDto {
  categoryId: ID;
  currencyId: ID;
  dedicatedSum: number;
  parentId?: ID;
}
