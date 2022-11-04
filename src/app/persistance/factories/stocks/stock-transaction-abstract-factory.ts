import { Criteria, IEntityCreator, IRepository, IStockTransaction } from '../../../..';

export abstract class StockTransactionAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IStockTransaction>) {}

  protected static instance: StockTransactionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockTransaction>;

  public createEntityInstance(fields: Criteria<IStockTransaction>): Promise<IStockTransaction> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockTransactionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockTransactionAbstractFactory {
    return this.instance;
  }
}
