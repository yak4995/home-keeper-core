import { Criteria, IEntityCreator, IRepository, ITransaction } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TransactionAbstractFactory extends EntityAbstractFactory<ITransaction> {
  protected constructor(entityCreator: IEntityCreator<ITransaction>) {
    super(entityCreator);
  }

  protected static instance: TransactionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITransaction>;

  public createEntityInstance(fields: Criteria<ITransaction>): Promise<ITransaction> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TransactionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TransactionAbstractFactory {
    return this.instance;
  }
}
