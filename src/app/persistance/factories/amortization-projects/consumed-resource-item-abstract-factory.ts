import { Criteria, IConsumedResourceItem, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class ConsumedResourceItemAbstractFactory extends EntityAbstractFactory<IConsumedResourceItem> {
  protected constructor(entityCreator: IEntityCreator<IConsumedResourceItem>) {
    super(entityCreator);
  }

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
