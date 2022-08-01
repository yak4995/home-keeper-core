import { EntityAbstractFactory, IConsumedResourceItem } from '@persistance';

export abstract class ConsumedResourceItemAbstractFactory extends EntityAbstractFactory<IConsumedResourceItem> {
  public static setInstance(instance: ConsumedResourceItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: ConsumedResourceItemAbstractFactory = null;

  public static getInstance(): ConsumedResourceItemAbstractFactory {
    return this.instance;
  }
}
