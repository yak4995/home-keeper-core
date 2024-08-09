import { IAmortizationDto, IMaintenanceItemDto, IConsumedResourceItemDto, InputPort, IIdentificationDto } from '..';
import { IHousehold, ID, CustomGeneralType } from '../..';

export interface AmortizationInputPort
  extends InputPort<{
    getAmortizations: [IHousehold, CustomGeneralType];
    getAmortizationDetails: [IIdentificationDto, CustomGeneralType];

    createAmortization: [IAmortizationDto, CustomGeneralType];
    updateAmortization: [IIdentificationDto & IAmortizationDto, CustomGeneralType];
    deleteAmortization: [IIdentificationDto, CustomGeneralType];

    createMaintenanceItem: [{ amortizationId: ID } & IMaintenanceItemDto, CustomGeneralType];
    updateMaintenanceItem: [IIdentificationDto & IMaintenanceItemDto, CustomGeneralType];
    deleteMaintenanceItem: [IIdentificationDto, CustomGeneralType];

    createConsumedResourceItem: [{ amortizationId: ID } & IConsumedResourceItemDto, CustomGeneralType];
    updateConsumedResourceItem: [IIdentificationDto & IConsumedResourceItemDto, CustomGeneralType];
    deleteConsumedResourceItem: [IIdentificationDto, CustomGeneralType];
  }> {}
