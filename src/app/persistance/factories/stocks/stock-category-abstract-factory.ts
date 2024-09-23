import { IEntityCreator, IRepository, IStockCategory } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class StockCategoryAbstractFactory extends EntityAbstractFactory<IStockCategory> {
  protected constructor(entityCreator: IEntityCreator<IStockCategory>) {
    super(entityCreator);
  }

  protected static instance: StockCategoryAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockCategory>;

  public createEntityInstance(fields: Partial<IStockCategory>): Promise<IStockCategory> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockCategoryAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockCategoryAbstractFactory {
    return this.instance;
  }
}
