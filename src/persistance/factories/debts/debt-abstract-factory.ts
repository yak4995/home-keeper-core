import { EntityAbstractFactory, IDebt } from '@persistance';

export abstract class DebtAbstractFactory extends EntityAbstractFactory<IDebt> {
  public static setInstance(instance: DebtAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: DebtAbstractFactory = null;

  public static getInstance(): DebtAbstractFactory {
    return this.instance;
  }
}
