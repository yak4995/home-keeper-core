import { OutputPort, StockTransactionInputPort } from '../..';

export interface StockTransactionOutputPort
  extends OutputPort<
    | 'getStockTransactionsList'
    | 'getStockTransactionDetails'
    | 'addStockTransaction'
    | 'editStockTransaction'
    | 'deleteStockTransaction',
    StockTransactionInputPort
  > {}
