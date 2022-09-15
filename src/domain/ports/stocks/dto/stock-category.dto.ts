import { ID } from '../../..';

export interface IStockCategoryDto {
  name: string;
  parentCategoryId: ID;
  ownerID: ID;
}
