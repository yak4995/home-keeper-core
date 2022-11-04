import { Criteria, IEntityCreator, IRepository, ITaxesReportDefinition } from '../../../..';

export abstract class TaxesReportDefinitionAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ITaxesReportDefinition>) {}

  protected static instance: TaxesReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITaxesReportDefinition>;

  public createEntityInstance(fields: Criteria<ITaxesReportDefinition>): Promise<ITaxesReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TaxesReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TaxesReportDefinitionAbstractFactory {
    return this.instance;
  }
}
