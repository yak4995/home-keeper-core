import { OutputPort } from '..';
import { CustomGeneralType, ICurrency, ILanguage, ITimezone } from '../..';

export interface SystemOutputPort
  extends OutputPort<{
    getAllCurrencies: [ICurrency[], CustomGeneralType];
    getCurrencyById: [ICurrency, CustomGeneralType];
    createCurrency: [ICurrency, CustomGeneralType];
    updateCurrency: [ICurrency, CustomGeneralType];

    getAllLanguages: [ILanguage[], CustomGeneralType];
    getLangById: [ILanguage, CustomGeneralType];
    createLanguage: [ILanguage, CustomGeneralType];
    updateLanguage: [ILanguage, CustomGeneralType];

    getAllTimezones: [ITimezone[], CustomGeneralType];
    getTzById: [ITimezone, CustomGeneralType];
    createTimezone: [ITimezone, CustomGeneralType];
    updateTimezone: [ITimezone, CustomGeneralType];
  }> {}
