import { OutputPort, TransactionAnalyticInputPort } from '..';

export interface TransactionAnalyticOutputPort
  extends OutputPort<
    | 'getMaxTransaction'
    | 'getMinTransaction'
    | 'getTransactionsCount'
    | 'getTransactionsSum'
    | 'getTransactionsAverage'
    | 'getTransactionsMedian'
    | 'getTransactionsRatio'
    | 'getTransactionsChange',
    TransactionAnalyticInputPort
  > {}
