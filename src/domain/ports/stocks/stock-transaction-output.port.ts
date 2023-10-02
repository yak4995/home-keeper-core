import { StockTransactionInputPort } from '../..';

export interface StockTransactionOutputPort {
  getStockTransactionsList<R>(
    output: Awaited<ReturnType<StockTransactionInputPort['getStockTransactionsList']>>,
    exception: unknown,
  ): Promise<R>;
  getStockTransactionDetails<R>(
    output: Awaited<ReturnType<StockTransactionInputPort['getStockTransactionDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addStockTransaction<R>(
    output: Awaited<ReturnType<StockTransactionInputPort['addStockTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  editStockTransaction<R>(
    output: Awaited<ReturnType<StockTransactionInputPort['editStockTransaction']>>,
    exception: unknown,
  ): Promise<R>;
  deleteStockTransaction<R>(
    output: Awaited<ReturnType<StockTransactionInputPort['deleteStockTransaction']>>,
    exception: unknown,
  ): Promise<R>;
}
