import { ICurrencyDto, ILangDto, ITzDto, InputPort } from '..';
import { ICurrency, ID, ILanguage, ITimezone } from '../..';

export interface SystemInputPort
  extends InputPort<
    | 'getAllCurrencies'
    | 'getCurrencyById'
    | 'createCurrency'
    | 'updateCurrency'
    | 'getAllLanguages'
    | 'getLangById'
    | 'createLanguage'
    | 'updateLanguage'
    | 'getAllTimezones'
    | 'getTzById'
    | 'createTimezone'
    | 'updateTimezone'
  > {
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
