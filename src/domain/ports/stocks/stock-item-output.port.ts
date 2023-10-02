import { StockItemInputPort } from '../..';

export interface StockItemOutputPort {
  getStockItemsList<R>(
    output: Awaited<ReturnType<StockItemInputPort['getStockItemsList']>>,
    exception: unknown,
  ): Promise<R>;
  getStockItemsDetails<R>(
    output: Awaited<ReturnType<StockItemInputPort['getStockItemsDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addStockItem<R>(output: Awaited<ReturnType<StockItemInputPort['addStockItem']>>, exception: unknown): Promise<R>;
  editStockItem<R>(output: Awaited<ReturnType<StockItemInputPort['editStockItem']>>, exception: unknown): Promise<R>;
  deleteStockItem<R>(
    output: Awaited<ReturnType<StockItemInputPort['deleteStockItem']>>,
    exception: unknown,
  ): Promise<R>;
}
