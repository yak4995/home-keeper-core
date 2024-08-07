import { Criteria, IBudgetItem, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class BudgetItemAbstractFactory extends EntityAbstractFactory<IBudgetItem> {
  protected constructor(entityCreator: IEntityCreator<IBudgetItem>) {
    super(entityCreator);
  }

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
