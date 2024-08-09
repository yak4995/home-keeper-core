import { OutputPort } from '..';
import { CustomGeneralType, ISupplyList, ISupplyListItem } from '../..';

export interface SupplyListOutputPort
  extends OutputPort<{
    getSupplyLists: [ISupplyList[], CustomGeneralType];
    getSupplyListDetails: [ISupplyList, CustomGeneralType];

    createSupplyListItem: [ISupplyListItem, CustomGeneralType];
    updateSupplyListItem: [ISupplyListItem, CustomGeneralType];
    deleteSupplyListItem: [ISupplyListItem, CustomGeneralType];
  }> {}
