import { OutputPort } from '..';
import { ICurrency, ILanguage, ITimezone } from '../..';

export interface SystemOutputPort
  extends OutputPort<{
    getAllCurrencies: [ICurrency[], object];
    getCurrencyById: [ICurrency, object];
    createCurrency: [ICurrency, object];
    updateCurrency: [ICurrency, object];

    getAllLanguages: [ILanguage[], object];
    getLangById: [ILanguage, object];
    createLanguage: [ILanguage, object];
    updateLanguage: [ILanguage, object];

    getAllTimezones: [ITimezone[], object];
    getTzById: [ITimezone, object];
    createTimezone: [ITimezone, object];
    updateTimezone: [ITimezone, object];
  }> {}
