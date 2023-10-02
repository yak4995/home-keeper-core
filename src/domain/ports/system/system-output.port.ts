import { SystemInputPort } from '../..';

export interface SystemOutputPort {
  getAllCurrencies<R>(output: Awaited<ReturnType<SystemInputPort['getAllCurrencies']>>, exception: unknown): Promise<R>;
  getCurrencyById<R>(output: Awaited<ReturnType<SystemInputPort['getCurrencyById']>>, exception: unknown): Promise<R>;
  createCurrency<R>(output: Awaited<ReturnType<SystemInputPort['createCurrency']>>, exception: unknown): Promise<R>;
  updateCurrency<R>(output: Awaited<ReturnType<SystemInputPort['updateCurrency']>>, exception: unknown): Promise<R>;
  getAllLanguages<R>(output: Awaited<ReturnType<SystemInputPort['getAllLanguages']>>, exception: unknown): Promise<R>;
  getLangById<R>(output: Awaited<ReturnType<SystemInputPort['getLangById']>>, exception: unknown): Promise<R>;
  createLanguage<R>(output: Awaited<ReturnType<SystemInputPort['createLanguage']>>, exception: unknown): Promise<R>;
  updateLanguage<R>(output: Awaited<ReturnType<SystemInputPort['updateLanguage']>>, exception: unknown): Promise<R>;
  getAllTimezones<R>(output: Awaited<ReturnType<SystemInputPort['getAllTimezones']>>, exception: unknown): Promise<R>;
  getTzById<R>(output: Awaited<ReturnType<SystemInputPort['getTzById']>>, exception: unknown): Promise<R>;
  createTimezone<R>(output: Awaited<ReturnType<SystemInputPort['createTimezone']>>, exception: unknown): Promise<R>;
  updateTimezone<R>(output: Awaited<ReturnType<SystemInputPort['updateTimezone']>>, exception: unknown): Promise<R>;
}
