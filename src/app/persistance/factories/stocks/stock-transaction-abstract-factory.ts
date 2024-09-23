import { IEntityCreator, IRepository, IStockTransaction } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class StockTransactionAbstractFactory extends EntityAbstractFactory<IStockTransaction> {
  protected constructor(entityCreator: IEntityCreator<IStockTransaction>) {
    super(entityCreator);
  }

  protected static instance: StockTransactionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockTransaction>;

  public createEntityInstance(fields: Partial<IStockTransaction>): Promise<IStockTransaction> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockTransactionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockTransactionAbstractFactory {
    return this.instance;
  }
}
