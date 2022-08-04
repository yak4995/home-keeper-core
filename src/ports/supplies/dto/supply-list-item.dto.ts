import { ID } from '../../../persistance';

export interface ISupplyListItemDto {
  isClosed: boolean;
  stockItemId: ID;
  supplyListId: ID;
}
