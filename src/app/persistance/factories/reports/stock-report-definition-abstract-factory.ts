import { Criteria, IEntityCreator, IRepository, IStockReportDefinition } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class StockReportDefinitionAbstractFactory extends EntityAbstractFactory<IStockReportDefinition> {
  protected constructor(entityCreator: IEntityCreator<IStockReportDefinition>) {
    super(entityCreator);
  }

  protected static instance: StockReportDefinitionAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IStockReportDefinition>;

  public createEntityInstance(fields: Criteria<IStockReportDefinition>): Promise<IStockReportDefinition> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: StockReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): StockReportDefinitionAbstractFactory {
    return this.instance;
  }
}
