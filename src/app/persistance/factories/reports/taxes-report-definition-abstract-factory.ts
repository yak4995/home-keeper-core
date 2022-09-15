import { EntityAbstractFactory, ITaxesReportDefinition } from '../../../..';

export abstract class TaxesReportDefinitionAbstractFactory extends EntityAbstractFactory<ITaxesReportDefinition> {
  public static setInstance(instance: TaxesReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TaxesReportDefinitionAbstractFactory = null;

  public static getInstance(): TaxesReportDefinitionAbstractFactory {
    return this.instance;
  }
}
