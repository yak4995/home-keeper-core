import { OutputPort } from '..';
import { IDebt, ListResponse } from '../..';

export interface DebtOutputPort
  extends OutputPort<{
    getDebtsList: [ListResponse<IDebt>, object];
    getDebtDetails: [IDebt, object];

    createDebt: [IDebt, object];
    updateDebt: [IDebt, object];
    deleteDebt: [IDebt, object];
  }> {}
