import { Criteria, IBudgetsReportDefinition, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class BudgetReportDefinitionAbstractFactory extends EntityAbstractFactory<IBudgetsReportDefinition> {
  protected constructor(entityCreator: IEntityCreator<IBudgetsReportDefinition>) {
    super(entityCreator);
  }

  protected static instance: BudgetReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IBudgetsReportDefinition>;

  public createEntityInstance(fields: Criteria<IBudgetsReportDefinition>): Promise<IBudgetsReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: BudgetReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): BudgetReportDefinitionAbstractFactory {
    return this.instance;
  }
}
