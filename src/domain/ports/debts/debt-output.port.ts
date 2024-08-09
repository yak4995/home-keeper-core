import { OutputPort } from '..';
import { CustomGeneralType, IDebt } from '../..';

export interface DebtOutputPort
  extends OutputPort<{
    getDebtsList: [IDebt[], CustomGeneralType];
    getDebtDetails: [IDebt, CustomGeneralType];

    createDebt: [IDebt, CustomGeneralType];
    updateDebt: [IDebt, CustomGeneralType];
    deleteDebt: [IDebt, CustomGeneralType];
  }> {}
