import { Criteria, IBudgetItem, IEntityCreator, IRepository } from '../../../..';

export abstract class BudgetItemAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IBudgetItem>) {}

  protected static instance: BudgetItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IBudgetItem>;

  public createEntityInstance(fields: Criteria<IBudgetItem>): Promise<IBudgetItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: BudgetItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): BudgetItemAbstractFactory {
    return this.instance;
  }
}
