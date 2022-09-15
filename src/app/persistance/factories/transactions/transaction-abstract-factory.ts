import { EntityAbstractFactory, ITransaction } from '../../../..';

export abstract class TransactionAbstractFactory extends EntityAbstractFactory<ITransaction> {
  public static setInstance(instance: TransactionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TransactionAbstractFactory = null;

  public static getInstance(): TransactionAbstractFactory {
    return this.instance;
  }
}
