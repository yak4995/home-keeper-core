import { OutputPort } from '..';
import { IEstimationProject, IEstimationProjectItem, ListResponse } from '../..';

export interface EstimationOutputPort
  extends OutputPort<{
    getEstimations: [ListResponse<IEstimationProject>, object];
    getEstimationDetails: [IEstimationProject, object];

    createEstimation: [IEstimationProject, object];
    updateEstimation: [IEstimationProject, object];
    deleteEstimation: [IEstimationProject, object];

    createEstimationItem: [IEstimationProjectItem, object];
    updateEstimationItem: [IEstimationProjectItem, object];
    deleteEstimationItem: [IEstimationProjectItem, object];
  }> {}
