import { ICurrency, ID, ILanguage, ITimezone } from '@persistance';
import { ICurrencyDto, ILangDto, ITzDto } from '@ports';

export interface SystemInputPort {
  getAllCurrencies(): Promise<ICurrency[]>;
  getCurrencyById(id: ID): Promise<ICurrency>;
  createCurrency(payload: ICurrencyDto): Promise<ICurrency>;
  updateCurrency(id: ID, payload: ICurrencyDto): Promise<ICurrency>;
  getAllLanguages(): Promise<ILanguage[]>;
  getLangById(id: ID): Promise<ILanguage>;
  createLanguage(payload: ILangDto): Promise<ILanguage>;
  updateLanguage(id: ID, payload: ILangDto): Promise<ILanguage>;
  getAllTimezones(): Promise<ITimezone[]>;
  getTzById(id: ID): Promise<ITimezone>;
  createTimezone(payload: ITzDto): Promise<ITimezone>;
  updateTimezone(id: ID, payload: ITzDto): Promise<ITimezone>;
}
