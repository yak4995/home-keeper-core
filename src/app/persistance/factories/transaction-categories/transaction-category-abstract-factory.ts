import { IEntityCreator, IRepository, ITransactionCategory } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TransactionCategoryAbstractFactory extends EntityAbstractFactory<ITransactionCategory> {
  protected constructor(entityCreator: IEntityCreator<ITransactionCategory>) {
    super(entityCreator);
  }

  protected static instance: TransactionCategoryAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITransactionCategory>;

  public createEntityInstance(fields: Partial<ITransactionCategory>): Promise<ITransactionCategory> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TransactionCategoryAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TransactionCategoryAbstractFactory {
    return this.instance;
  }
}
