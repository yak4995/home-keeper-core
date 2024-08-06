import { Criteria, IBudget, IEntityCreator, IRepository } from '../../../..';

export abstract class BudgetAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IBudget>) {}

  protected static instance: BudgetAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IBudget>;

  public createEntityInstance(fields: Criteria<IBudget>): Promise<IBudget> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: BudgetAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): BudgetAbstractFactory {
    return this.instance;
  }
}
