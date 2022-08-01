import { EntityAbstractFactory, IBudget } from '@persistance';

export abstract class BudgetAbstractFactory extends EntityAbstractFactory<IBudget> {
  public static setInstance(instance: BudgetAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: BudgetAbstractFactory = null;

  public static getInstance(): BudgetAbstractFactory {
    return this.instance;
  }
}
