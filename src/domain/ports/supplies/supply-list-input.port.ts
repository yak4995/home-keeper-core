import { IIdentificationDto, ISupplyListItemDto, InputPort } from '..';
import { ID } from '../..';

export interface SupplyListInputPort
  extends InputPort<{
    getSupplyLists: [{ ownerID: ID }, object];
    getSupplyListDetails: [IIdentificationDto, object];

    createSupplyListItem: [ISupplyListItemDto, object];
    updateSupplyListItem: [IIdentificationDto & ISupplyListItemDto, object];
    deleteSupplyListItem: [IIdentificationDto, object];
  }> {}
