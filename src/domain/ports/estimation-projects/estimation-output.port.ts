import { EstimationInputPort, OutputPort } from '../..';

export interface EstimationOutputPort
  extends OutputPort<
    | 'getEstimations'
    | 'getEstimationDetails'
    | 'addEstimation'
    | 'editEstimation'
    | 'addEstimationItem'
    | 'editEstimationItem'
    | 'deleteEstimationItem'
    | 'deleteEstimation',
    EstimationInputPort
  > {}
