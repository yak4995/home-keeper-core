import { ICurrencyDto, IIdentificationDto, ILangDto, ITzDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface SystemInputPort
  extends InputPort<{
    getAllCurrencies: [undefined, CustomGeneralType];
    getCurrencyById: [IIdentificationDto, CustomGeneralType];
    createCurrency: [ICurrencyDto, CustomGeneralType];
    updateCurrency: [IIdentificationDto & ICurrencyDto, CustomGeneralType];

    getAllLanguages: [undefined, CustomGeneralType];
    getLangById: [IIdentificationDto, CustomGeneralType];
    createLanguage: [ILangDto, CustomGeneralType];
    updateLanguage: [IIdentificationDto & ILangDto, CustomGeneralType];

    getAllTimezones: [undefined, CustomGeneralType];
    getTzById: [IIdentificationDto, CustomGeneralType];
    createTimezone: [ITzDto, CustomGeneralType];
    updateTimezone: [IIdentificationDto & ITzDto, CustomGeneralType];
  }> {}
