import { ICurrencyDto, IIdentificationDto, ILangDto, IListDto, ITzDto, InputPort } from '..';
import { ICurrency, ILanguage, ITimezone } from '../..';

export interface SystemInputPort
  extends InputPort<{
    getAllCurrencies: [IListDto<ICurrency> & { filter?: Partial<ICurrencyDto & IIdentificationDto> }, object];
    getCurrencyById: [IIdentificationDto, object];
    createCurrency: [ICurrencyDto, object];
    updateCurrency: [IIdentificationDto & ICurrencyDto, object];

    getAllLanguages: [IListDto<ILanguage> & { filter?: Partial<ILangDto & IIdentificationDto> }, object];
    getLangById: [IIdentificationDto, object];
    createLanguage: [ILangDto, object];
    updateLanguage: [IIdentificationDto & ILangDto, object];

    getAllTimezones: [IListDto<ITimezone> & { filter?: Partial<ITzDto & IIdentificationDto> }, object];
    getTzById: [IIdentificationDto, object];
    createTimezone: [ITzDto, object];
    updateTimezone: [IIdentificationDto & ITzDto, object];
  }> {}
