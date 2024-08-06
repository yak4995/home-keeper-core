import { Criteria, IBudgetsReportDefinition, IEntityCreator, IRepository } from '../../../..';

export abstract class BudgetReportDefinitionAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IBudgetsReportDefinition>) {}

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
