import { EntityAbstractFactory, IAccount } from '@persistance';

export abstract class AccountAbstractFactory extends EntityAbstractFactory<IAccount> {
  public static setInstance(instance: AccountAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: AccountAbstractFactory = null;

  public static getInstance(): AccountAbstractFactory {
    return this.instance;
  }
}
