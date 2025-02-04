import { ID } from '../../..';

export interface IBudgetItemDto {
  parentId?: ID;
  categoryId: ID;
  dedicatedSum: number;
}
