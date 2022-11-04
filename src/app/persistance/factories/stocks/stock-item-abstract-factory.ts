import { Criteria, IEntityCreator, IRepository, IStockItem } from '../../../..';

export abstract class StockItemAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IStockItem>) {}

  protected static instance: StockItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockItem>;

  public createEntityInstance(fields: Criteria<IStockItem>): Promise<IStockItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockItemAbstractFactory {
    return this.instance;
  }
}
