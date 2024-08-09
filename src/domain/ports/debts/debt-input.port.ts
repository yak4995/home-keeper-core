import { IDebtDto, IIdentificationDto, InputPort } from '..';
import { CustomGeneralType, IHousehold } from '../..';

export interface DebtInputPort
  extends InputPort<{
    getDebtsList: [IHousehold, CustomGeneralType];
    getDebtDetails: [IIdentificationDto, CustomGeneralType];

    createDebt: [IDebtDto, CustomGeneralType];
    updateDebt: [IIdentificationDto & IDebtDto, CustomGeneralType];
    deleteDebt: [IIdentificationDto, CustomGeneralType];
  }> {}
