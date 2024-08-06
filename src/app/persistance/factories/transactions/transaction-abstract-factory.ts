import { Criteria, IEntityCreator, IRepository, ITransaction } from '../../../..';

export abstract class TransactionAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<ITransaction>) {}

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
