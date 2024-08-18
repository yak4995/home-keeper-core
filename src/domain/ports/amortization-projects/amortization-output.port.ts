import { OutputPort } from '..';
import { IAmortizationProject, IConsumedResourceItem, IMaintenanceItem } from '../..';

export interface AmortizationOutputPort
  extends OutputPort<{
    getAmortizations: [IAmortizationProject[], object];
    getAmortizationDetails: [IAmortizationProject, object];

    createAmortization: [IAmortizationProject, object];
    updateAmortization: [IAmortizationProject, object];
    deleteAmortization: [IAmortizationProject, object];

    createMaintenanceItem: [IMaintenanceItem, object];
    updateMaintenanceItem: [IMaintenanceItem, object];
    deleteMaintenanceItem: [IMaintenanceItem, object];

    createConsumedResourceItem: [IConsumedResourceItem, object];
    updateConsumedResourceItem: [IConsumedResourceItem, object];
    deleteConsumedResourceItem: [IConsumedResourceItem, object];
  }> {}
