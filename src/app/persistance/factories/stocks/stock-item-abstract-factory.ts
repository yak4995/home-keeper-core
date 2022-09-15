import { EntityAbstractFactory, IStockItem } from '../../../..';

export abstract class StockItemAbstractFactory extends EntityAbstractFactory<IStockItem> {
  public static setInstance(instance: StockItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: StockItemAbstractFactory = null;

  public static getInstance(): StockItemAbstractFactory {
    return this.instance;
  }
}
