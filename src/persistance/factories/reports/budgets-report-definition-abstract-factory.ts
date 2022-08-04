import { EntityAbstractFactory, IBudgetsReportDefinition } from '../..';

export abstract class BudgetReportDefinitionAbstractFactory extends EntityAbstractFactory<IBudgetsReportDefinition> {
  public static setInstance(instance: BudgetReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: BudgetReportDefinitionAbstractFactory = null;

  public static getInstance(): BudgetReportDefinitionAbstractFactory {
    return this.instance;
  }
}
