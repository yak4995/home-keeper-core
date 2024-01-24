import { OutputPort, SupplyListInputPort } from '../..';

export interface SupplyListOutputPort
  extends OutputPort<
    'getSupplyLists' | 'getSupplyListDetails' | 'addSupplyListItem' | 'editSupplyListItem' | 'deleteSupplyListItem',
    SupplyListInputPort
  > {}
