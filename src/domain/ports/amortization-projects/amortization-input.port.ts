import { IAmortizationDto, IMaintenanceItemDto, IConsumedResourceItemDto, InputPort } from '..';

import { IHousehold, IAmortizationProject, ID, IBudget, IConsumedResourceItem, IMaintenanceItem } from '../..';

export interface AmortizationInputPort
  extends InputPort<
    | 'getAmortizations'
    | 'getAmortizationDetails'
    | 'addAmortization'
    | 'editAmortization'
    | 'addMaintenanceItem'
    | 'editMaintenanceItem'
    | 'deleteMaintenanceItem'
    | 'addConsumedResourceItem'
    | 'editConsumedResourceItem'
    | 'deleteConsumedResourceItem'
    | 'deleteAmortization'
  > {
  getAmortizations(owner: IHousehold): Promise<IAmortizationProject[]>;
  getAmortizationDetails(id: ID): Promise<IAmortizationProject>;
  addAmortization(payload: IAmortizationDto): Promise<IAmortizationProject>;
  editAmortization(id: ID, payload: IAmortizationDto): Promise<IBudget>;
  addMaintenanceItem(amortizationId: ID, payload: IMaintenanceItemDto): Promise<IMaintenanceItem>;
  editMaintenanceItem(id: ID, payload: IMaintenanceItemDto): Promise<IMaintenanceItem>;
  deleteMaintenanceItem(id: ID): Promise<IMaintenanceItem>;
  addConsumedResourceItem(amortizationId: ID, payload: IConsumedResourceItemDto): Promise<IConsumedResourceItem>;
  editConsumedResourceItem(id: ID, payload: IConsumedResourceItemDto): Promise<IConsumedResourceItem>;
  deleteConsumedResourceItem(id: ID): Promise<IConsumedResourceItem>;
  deleteAmortization(id: ID): Promise<IAmortizationProject>;
}
