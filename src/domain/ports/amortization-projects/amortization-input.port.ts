import { IAmortizationDto, IMaintenanceItemDto, IConsumedResourceItemDto, InputPort, IIdentificationDto } from '..';
import { IHousehold, ID } from '../..';

export interface AmortizationInputPort
  extends InputPort<{
    getAmortizations: [IHousehold, object];
    getAmortizationDetails: [IIdentificationDto, object];

    createAmortization: [IAmortizationDto, object];
    updateAmortization: [IIdentificationDto & IAmortizationDto, object];
    deleteAmortization: [IIdentificationDto, object];

    createMaintenanceItem: [{ amortizationId: ID } & IMaintenanceItemDto, object];
    updateMaintenanceItem: [IIdentificationDto & IMaintenanceItemDto, object];
    deleteMaintenanceItem: [IIdentificationDto, object];

    createConsumedResourceItem: [{ amortizationId: ID } & IConsumedResourceItemDto, object];
    updateConsumedResourceItem: [IIdentificationDto & IConsumedResourceItemDto, object];
    deleteConsumedResourceItem: [IIdentificationDto, object];
  }> {}
