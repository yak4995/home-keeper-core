import { EntityAbstractFactory, IStockCategory } from '@persistance';

export abstract class StockCategoryAbstractFactory extends EntityAbstractFactory<IStockCategory> {
  public static setInstance(instance: StockCategoryAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: StockCategoryAbstractFactory = null;

  public static getInstance(): StockCategoryAbstractFactory {
    return this.instance;
  }
}
