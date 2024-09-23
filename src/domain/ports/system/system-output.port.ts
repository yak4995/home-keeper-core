import { OutputPort } from '..';
import { ICurrency, ILanguage, ITimezone, ListResponse } from '../..';

export interface SystemOutputPort
  extends OutputPort<{
    getListOfCurrencies: [ListResponse<ICurrency>, object];
    getCurrencyById: [ICurrency, object];
    createCurrency: [ICurrency, object];
    updateCurrency: [ICurrency, object];
    deleteCurrency: [ICurrency, object];

    getListOfLanguages: [ListResponse<ILanguage>, object];
    getLangById: [ILanguage, object];
    createLanguage: [ILanguage, object];
    updateLanguage: [ILanguage, object];
    deleteLanguage: [ILanguage, object];

    getListOfTimezones: [ListResponse<ITimezone>, object];
    getTzById: [ITimezone, object];
    createTimezone: [ITimezone, object];
    updateTimezone: [ITimezone, object];
    deleteTimezone: [ITimezone, object];
  }> {}
