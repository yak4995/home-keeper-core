import { StockCategoryInputPort } from '../..';

export interface StockCategoryOutputPort {
  getRootCategories<R>(
    output: Awaited<ReturnType<StockCategoryInputPort['getRootCategories']>>,
    exception: unknown,
  ): Promise<R>;
  getCategoryChildren<R>(
    output: Awaited<ReturnType<StockCategoryInputPort['getCategoryChildren']>>,
    exception: unknown,
  ): Promise<R>;
  addStockCategory<R>(
    output: Awaited<ReturnType<StockCategoryInputPort['addStockCategory']>>,
    exception: unknown,
  ): Promise<R>;
  editStockCategory<R>(
    output: Awaited<ReturnType<StockCategoryInputPort['editStockCategory']>>,
    exception: unknown,
  ): Promise<R>;
  deleteStockCategory<R>(
    output: Awaited<ReturnType<StockCategoryInputPort['deleteStockCategory']>>,
    exception: unknown,
  ): Promise<R>;
}
