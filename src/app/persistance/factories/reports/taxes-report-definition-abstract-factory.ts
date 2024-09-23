import { IEntityCreator, IRepository, ITaxesReportDefinition } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TaxesReportDefinitionAbstractFactory extends EntityAbstractFactory<ITaxesReportDefinition> {
  protected constructor(entityCreator: IEntityCreator<ITaxesReportDefinition>) {
    super(entityCreator);
  }

  protected static instance: TaxesReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITaxesReportDefinition>;

  public createEntityInstance(fields: Partial<ITaxesReportDefinition>): Promise<ITaxesReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TaxesReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TaxesReportDefinitionAbstractFactory {
    return this.instance;
  }
}
