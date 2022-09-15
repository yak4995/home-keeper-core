import { EntityAbstractFactory, IBudgetItem } from '../../../..';

export abstract class BudgetItemAbstractFactory extends EntityAbstractFactory<IBudgetItem> {
  public static setInstance(instance: BudgetItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: BudgetItemAbstractFactory = null;

  public static getInstance(): BudgetItemAbstractFactory {
    return this.instance;
  }
}
