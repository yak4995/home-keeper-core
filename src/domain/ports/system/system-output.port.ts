import { ICurrency, ILanguage, ITimezone } from '../..';

export interface SystemOutputPort {
  getAllCurrencies(output: ICurrency[]): Promise<any>;
  getCurrencyById(output: ICurrency): Promise<any>;
  createCurrency(output: ICurrency): Promise<any>;
  updateCurrency(output: ICurrency): Promise<any>;
  getAllLanguages(output: ILanguage): Promise<any>;
  getLangById(output: ILanguage): Promise<any>;
  createLanguage(output: ILanguage): Promise<any>;
  updateLanguage(output: ILanguage): Promise<any>;
  getAllTimezones(output: ITimezone[]): Promise<any>;
  getTzById(output: ITimezone): Promise<any>;
  createTimezone(output: ITimezone): Promise<any>;
  updateTimezone(output: ITimezone): Promise<any>;
}
