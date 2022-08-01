import { EntityAbstractFactory, IEstimationProjectItem } from '@persistance';

export abstract class EstimationProjectItemAbstractFactory extends EntityAbstractFactory<IEstimationProjectItem> {
  public static setInstance(instance: EstimationProjectItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: EstimationProjectItemAbstractFactory = null;

  public static getInstance(): EstimationProjectItemAbstractFactory {
    return this.instance;
  }
}
