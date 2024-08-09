import { OutputPort } from '..';
import { CustomGeneralType, IAmortizationProject, IConsumedResourceItem, IMaintenanceItem } from '../..';

export interface AmortizationOutputPort
  extends OutputPort<{
    getAmortizations: [IAmortizationProject[], CustomGeneralType];
    getAmortizationDetails: [IAmortizationProject, CustomGeneralType];

    createAmortization: [IAmortizationProject, CustomGeneralType];
    updateAmortization: [IAmortizationProject, CustomGeneralType];
    deleteAmortization: [IAmortizationProject, CustomGeneralType];

    createMaintenanceItem: [IMaintenanceItem, CustomGeneralType];
    updateMaintenanceItem: [IMaintenanceItem, CustomGeneralType];
    deleteMaintenanceItem: [IMaintenanceItem, CustomGeneralType];

    createConsumedResourceItem: [IConsumedResourceItem, CustomGeneralType];
    updateConsumedResourceItem: [IConsumedResourceItem, CustomGeneralType];
    deleteConsumedResourceItem: [IConsumedResourceItem, CustomGeneralType];
  }> {}
