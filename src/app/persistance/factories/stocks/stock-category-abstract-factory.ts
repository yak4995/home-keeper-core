import { Criteria, IEntityCreator, IRepository, IStockCategory } from '../../../..';

export abstract class StockCategoryAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IStockCategory>) {}

  protected static instance: StockCategoryAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockCategory>;

  public createEntityInstance(fields: Criteria<IStockCategory>): Promise<IStockCategory> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockCategoryAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockCategoryAbstractFactory {
    return this.instance;
  }
}
