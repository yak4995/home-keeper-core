import { EntityAbstractFactory, ISubscription } from '@persistance';

export abstract class SubscriptionAbstractFactory extends EntityAbstractFactory<ISubscription> {
  public static setInstance(instance: SubscriptionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: SubscriptionAbstractFactory = null;

  public static getInstance(): SubscriptionAbstractFactory {
    return this.instance;
  }
}
