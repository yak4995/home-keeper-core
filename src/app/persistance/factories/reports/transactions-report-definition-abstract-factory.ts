import { Criteria, IEntityCreator, IRepository, ITransactionsReportDefinition } from '../../../..';

export abstract class TransactionsReportDefinitionAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<ITransactionsReportDefinition>) {}

  protected static instance: TransactionsReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITransactionsReportDefinition>;

  public createEntityInstance(fields: Criteria<ITransactionsReportDefinition>): Promise<ITransactionsReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TransactionsReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TransactionsReportDefinitionAbstractFactory {
    return this.instance;
  }
}
