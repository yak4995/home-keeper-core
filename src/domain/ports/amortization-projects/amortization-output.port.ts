import { AmortizationInputPort, OutputPort } from '../..';

export interface AmortizationOutputPort
  extends OutputPort<
    | 'getAmortizations'
    | 'getAmortizationDetails'
    | 'addAmortization'
    | 'editAmortization'
    | 'addMaintenanceItem'
    | 'editMaintenanceItem'
    | 'deleteMaintenanceItem'
    | 'addConsumedResourceItem'
    | 'editConsumedResourceItem'
    | 'deleteConsumedResourceItem'
    | 'deleteAmortization',
    AmortizationInputPort
  > {}
