import { EntityAbstractFactory, ITransactionsReportDefinition } from '../../../..';

export abstract class TransactionsReportDefinitionAbstractFactory extends EntityAbstractFactory<ITransactionsReportDefinition> {
  public static setInstance(instance: TransactionsReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TransactionsReportDefinitionAbstractFactory = null;

  public static getInstance(): TransactionsReportDefinitionAbstractFactory {
    return this.instance;
  }
}
