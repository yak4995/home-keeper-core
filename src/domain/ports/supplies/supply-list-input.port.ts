import { IIdentificationDto, ISupplyListItemDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface SupplyListInputPort
  extends InputPort<{
    getSupplyLists: [{ ownerID: ID }, CustomGeneralType];
    getSupplyListDetails: [IIdentificationDto, CustomGeneralType];

    createSupplyListItem: [ISupplyListItemDto, CustomGeneralType];
    updateSupplyListItem: [IIdentificationDto & ISupplyListItemDto, CustomGeneralType];
    deleteSupplyListItem: [IIdentificationDto, CustomGeneralType];
  }> {}
