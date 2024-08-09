import { OutputPort } from '..';
import { CustomGeneralType, IEstimationProject, IEstimationProjectItem } from '../..';

export interface EstimationOutputPort
  extends OutputPort<{
    getEstimations: [IEstimationProject[], CustomGeneralType];
    getEstimationDetails: [IEstimationProject, CustomGeneralType];

    createEstimation: [IEstimationProject, CustomGeneralType];
    updateEstimation: [IEstimationProject, CustomGeneralType];
    deleteEstimation: [IEstimationProject, CustomGeneralType];

    createEstimationItem: [IEstimationProjectItem, CustomGeneralType];
    updateEstimationItem: [IEstimationProjectItem, CustomGeneralType];
    deleteEstimationItem: [IEstimationProjectItem, CustomGeneralType];
  }> {}
