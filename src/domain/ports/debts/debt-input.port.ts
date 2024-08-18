import { IDebtDto, IIdentificationDto, InputPort } from '..';
import { IHousehold } from '../..';

export interface DebtInputPort
  extends InputPort<{
    getDebtsList: [IHousehold, object];
    getDebtDetails: [IIdentificationDto, object];

    createDebt: [IDebtDto, object];
    updateDebt: [IIdentificationDto & IDebtDto, object];
    deleteDebt: [IIdentificationDto, object];
  }> {}
