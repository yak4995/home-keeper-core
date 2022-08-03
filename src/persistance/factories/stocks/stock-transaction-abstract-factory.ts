import { EntityAbstractFactory, IStockTransaction } from 'persistance';

export abstract class StockTransactionAbstractFactory extends EntityAbstractFactory<IStockTransaction> {
  public static setInstance(instance: StockTransactionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: StockTransactionAbstractFactory = null;

  public static getInstance(): StockTransactionAbstractFactory {
    return this.instance;
  }
}
