import { IEstimationDto, IEstimationItemDto, IIdentificationDto, InputPort } from '..';
import { ID, IHousehold } from '../..';

export interface EstimationInputPort
  extends InputPort<{
    getEstimations: [{ owner: IHousehold; from: Date; to: Date }, object];
    getEstimationDetails: [IIdentificationDto, object];

    createEstimation: [IEstimationDto, object];
    updateEstimation: [IIdentificationDto & IEstimationDto, object];
    deleteEstimation: [IIdentificationDto, object];

    createEstimationItem: [{ estimationId: ID } & IEstimationItemDto, object];
    updateEstimationItem: [IIdentificationDto & IEstimationItemDto, object];
    deleteEstimationItem: [IIdentificationDto, object];
  }> {}
