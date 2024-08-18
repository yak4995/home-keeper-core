import { OutputPort } from '..';
import { IEstimationProject, IEstimationProjectItem } from '../..';

export interface EstimationOutputPort
  extends OutputPort<{
    getEstimations: [IEstimationProject[], object];
    getEstimationDetails: [IEstimationProject, object];

    createEstimation: [IEstimationProject, object];
    updateEstimation: [IEstimationProject, object];
    deleteEstimation: [IEstimationProject, object];

    createEstimationItem: [IEstimationProjectItem, object];
    updateEstimationItem: [IEstimationProjectItem, object];
    deleteEstimationItem: [IEstimationProjectItem, object];
  }> {}
