import { Criteria, IEntityCreator, IRepository, ITransactionCategory } from '../../../..';

export abstract class TransactionCategoryAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ITransactionCategory>) {}

  protected static instance: TransactionCategoryAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITransactionCategory>;

  public createEntityInstance(fields: Criteria<ITransactionCategory>): Promise<ITransactionCategory> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TransactionCategoryAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TransactionCategoryAbstractFactory {
    return this.instance;
  }
}
