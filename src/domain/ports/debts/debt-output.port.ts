import { DebtInputPort, OutputPort } from '../..';

export interface DebtOutputPort
  extends OutputPort<'getDebtsList' | 'getDebtDetails' | 'addDebt' | 'editDebt' | 'deleteDebt', DebtInputPort> {}
