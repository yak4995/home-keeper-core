import { Criteria, IBudget, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class BudgetAbstractFactory extends EntityAbstractFactory<IBudget> {
  protected constructor(entityCreator: IEntityCreator<IBudget>) {
    super(entityCreator);
  }

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
