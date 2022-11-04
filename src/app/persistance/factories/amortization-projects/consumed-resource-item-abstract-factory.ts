import { Criteria, IConsumedResourceItem, IEntityCreator, IRepository } from '../../../..';

export abstract class ConsumedResourceItemAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IConsumedResourceItem>) {}

  public static setInstance(instance: ConsumedResourceItemAbstractFactory): void {
    this.instance = instance;
  }

  abstract createEntityRepo(): IRepository<IConsumedResourceItem>;

  public createEntityInstance(fields: Criteria<IConsumedResourceItem>): Promise<IConsumedResourceItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  protected static instance: ConsumedResourceItemAbstractFactory = null;

  public static getInstance(): ConsumedResourceItemAbstractFactory {
    return this.instance;
  }
}
