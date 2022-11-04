import { Criteria, IEntityCreator, IRepository, ISubscription } from '../../../..';

export abstract class SubscriptionAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ISubscription>) {}

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
