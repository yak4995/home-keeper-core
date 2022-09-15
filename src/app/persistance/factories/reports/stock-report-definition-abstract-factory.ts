import { EntityAbstractFactory, IStockReportDefinition } from '../../../..';

export abstract class StockReportDefinitionAbstractFactory extends EntityAbstractFactory<IStockReportDefinition> {
  public static setInstance(instance: StockReportDefinitionAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: StockReportDefinitionAbstractFactory = null;

  public static getInstance(): StockReportDefinitionAbstractFactory {
    return this.instance;
  }
}
