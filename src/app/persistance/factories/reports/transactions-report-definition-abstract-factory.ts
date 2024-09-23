import { IEntityCreator, IRepository, ITransactionsReportDefinition } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TransactionsReportDefinitionAbstractFactory extends EntityAbstractFactory<ITransactionsReportDefinition> {
  protected constructor(entityCreator: IEntityCreator<ITransactionsReportDefinition>) {
    super(entityCreator);
  }

  protected static instance: TransactionsReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITransactionsReportDefinition>;

  public createEntityInstance(fields: Partial<ITransactionsReportDefinition>): Promise<ITransactionsReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TransactionsReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TransactionsReportDefinitionAbstractFactory {
    return this.instance;
  }
}
