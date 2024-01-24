import { ISupplyListItemDto, InputPort } from '..';
import { ID, ISupplyList, ISupplyListItem } from '../..';

export interface SupplyListInputPort
  extends InputPort<
    'getSupplyLists' | 'getSupplyListDetails' | 'addSupplyListItem' | 'editSupplyListItem' | 'deleteSupplyListItem'
  > {
  getSupplyLists(ownerID: ID): Promise<ISupplyList[]>;
  getSupplyListDetails(id: ID): Promise<ISupplyList>;
  addSupplyListItem(payload: ISupplyListItemDto): Promise<ISupplyListItem>;
  editSupplyListItem(id: ID, payload: ISupplyListItemDto): Promise<ISupplyListItem>;
  deleteSupplyListItem(id: ID): Promise<ISupplyListItem>;
}
