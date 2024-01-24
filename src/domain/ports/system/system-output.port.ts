import { OutputPort, SystemInputPort } from '../..';

export interface SystemOutputPort
  extends OutputPort<
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
    | 'updateTimezone',
    SystemInputPort
  > {}
