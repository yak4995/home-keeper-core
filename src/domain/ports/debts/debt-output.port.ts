import { OutputPort } from '..';
import { IDebt } from '../..';

export interface DebtOutputPort
  extends OutputPort<{
    getDebtsList: [IDebt[], object];
    getDebtDetails: [IDebt, object];

    createDebt: [IDebt, object];
    updateDebt: [IDebt, object];
    deleteDebt: [IDebt, object];
  }> {}
