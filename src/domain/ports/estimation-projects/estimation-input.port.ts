import { IEstimationDto, IEstimationItemDto, IIdentificationDto, InputPort } from '..';
import { CustomGeneralType, ID, IHousehold } from '../..';

export interface EstimationInputPort
  extends InputPort<{
    getEstimations: [{ owner: IHousehold; from: Date; to: Date }, CustomGeneralType];
    getEstimationDetails: [IIdentificationDto, CustomGeneralType];

    createEstimation: [IEstimationDto, CustomGeneralType];
    updateEstimation: [IIdentificationDto & IEstimationDto, CustomGeneralType];
    deleteEstimation: [IIdentificationDto, CustomGeneralType];

    createEstimationItem: [{ estimationId: ID } & IEstimationItemDto, CustomGeneralType];
    updateEstimationItem: [IIdentificationDto & IEstimationItemDto, CustomGeneralType];
    deleteEstimationItem: [IIdentificationDto, CustomGeneralType];
  }> {}
