import { EntityAbstractFactory, ITransactionCategory } from '../../../..';

export abstract class TransactionCategoryAbstractFactory extends EntityAbstractFactory<ITransactionCategory> {
  public static setInstance(instance: TransactionCategoryAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TransactionCategoryAbstractFactory = null;

  public static getInstance(): TransactionCategoryAbstractFactory {
    return this.instance;
  }
}
