import { OutputPort } from '..';
import { ISupplyList, ISupplyListItem } from '../..';

export interface SupplyListOutputPort
  extends OutputPort<{
    getSupplyLists: [ISupplyList[], object];
    getSupplyListDetails: [ISupplyList, object];

    createSupplyListItem: [ISupplyListItem, object];
    updateSupplyListItem: [ISupplyListItem, object];
    deleteSupplyListItem: [ISupplyListItem, object];
  }> {}
