import { Criteria, IEntityCreator, IRepository, IStockReportDefinition } from '../../../..';

export abstract class StockReportDefinitionAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IStockReportDefinition>) {}

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
