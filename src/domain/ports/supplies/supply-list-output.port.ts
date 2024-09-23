import { OutputPort } from '..';
import { ISupplyList, ISupplyListItem, ListResponse } from '../..';

export interface SupplyListOutputPort
  extends OutputPort<{
    getSupplyLists: [ListResponse<ISupplyList>, object];
    getSupplyListDetails: [ISupplyList, object];

    createSupplyListItem: [ISupplyListItem, object];
    updateSupplyListItem: [ISupplyListItem, object];
    deleteSupplyListItem: [ISupplyListItem, object];
  }> {}
