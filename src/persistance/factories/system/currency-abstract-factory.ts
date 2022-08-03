import { EntityAbstractFactory, ICurrency } from 'persistance';

export abstract class CurrencyAbstractFactory extends EntityAbstractFactory<ICurrency> {
  public static setInstance(instance: CurrencyAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: CurrencyAbstractFactory = null;

  public static getInstance(): CurrencyAbstractFactory {
    return this.instance;
  }
}
