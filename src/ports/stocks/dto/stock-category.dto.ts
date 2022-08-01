import { ID } from '@persistance';

export interface IStockCategoryDto {
  name: string;
  parentCategoryId: ID;
  ownerID: ID;
}
