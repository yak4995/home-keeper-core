import { Criteria, IEntityCreator, IRepository, ISubscription } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class SubscriptionAbstractFactory extends EntityAbstractFactory<ISubscription> {
  protected constructor(entityCreator: IEntityCreator<ISubscription>) {
    super(entityCreator);
  }

  protected static instance: SubscriptionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ISubscription>;

  public createEntityInstance(fields: Criteria<ISubscription>): Promise<ISubscription> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: SubscriptionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): SubscriptionAbstractFactory {
    return this.instance;
  }
}
