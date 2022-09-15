import { ID, ISupplyList, ISupplyListItem } from '../..';
import { ISupplyListItemDto } from '..';

export interface SupplyListInputPort {
  getSupplyLists(ownerID: ID): Promise<ISupplyList[]>;
  getSupplyListDetails(id: ID): Promise<ISupplyList>;
  addSupplyListItem(payload: ISupplyListItemDto): Promise<ISupplyListItem>;
  editSupplyListItem(id: ID, payload: ISupplyListItemDto): Promise<ISupplyListItem>;
  deleteSupplyListItem(id: ID): Promise<ISupplyListItem>;
}
