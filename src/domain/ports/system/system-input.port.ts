import { ICurrencyDto, IIdentificationDto, ILangDto, IListDto, ITzDto, InputPort } from '..';
import { ICurrency, ILanguage, ITimezone } from '../..';

export interface SystemInputPort
  extends InputPort<{
    getListOfCurrencies: [IListDto<ICurrency>, object];
    getCurrencyById: [IIdentificationDto, object];
    createCurrency: [ICurrencyDto, object];
    updateCurrency: [IIdentificationDto & ICurrencyDto, object];
    deleteCurrency: [IIdentificationDto, object];

    getListOfLanguages: [IListDto<ILanguage>, object];
    getLangById: [IIdentificationDto, object];
    createLanguage: [ILangDto, object];
    updateLanguage: [IIdentificationDto & ILangDto, object];
    deleteLanguage: [IIdentificationDto, object];

    getListOfTimezones: [IListDto<ITimezone>, object];
    getTzById: [IIdentificationDto, object];
    createTimezone: [ITzDto, object];
    updateTimezone: [IIdentificationDto & ITzDto, object];
    deleteTimezone: [IIdentificationDto, object];
  }> {}
