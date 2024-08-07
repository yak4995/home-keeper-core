import { Criteria, IEntityCreator, IRepository, IStockItem } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class StockItemAbstractFactory extends EntityAbstractFactory<IStockItem> {
  protected constructor(entityCreator: IEntityCreator<IStockItem>) {
    super(entityCreator);
  }

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
