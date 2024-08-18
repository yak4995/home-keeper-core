import { ICurrencyDto, IIdentificationDto, ILangDto, ITzDto, InputPort } from '..';

export interface SystemInputPort
  extends InputPort<{
    getAllCurrencies: [undefined, object];
    getCurrencyById: [IIdentificationDto, object];
    createCurrency: [ICurrencyDto, object];
    updateCurrency: [IIdentificationDto & ICurrencyDto, object];

    getAllLanguages: [undefined, object];
    getLangById: [IIdentificationDto, object];
    createLanguage: [ILangDto, object];
    updateLanguage: [IIdentificationDto & ILangDto, object];

    getAllTimezones: [undefined, object];
    getTzById: [IIdentificationDto, object];
    createTimezone: [ITzDto, object];
    updateTimezone: [IIdentificationDto & ITzDto, object];
  }> {}
