import { EntityAbstractFactory, IEstimationProject } from '../..';

export abstract class EstimationProjectAbstractFactory extends EntityAbstractFactory<IEstimationProject> {
  public static setInstance(instance: EstimationProjectAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: EstimationProjectAbstractFactory = null;

  public static getInstance(): EstimationProjectAbstractFactory {
    return this.instance;
  }
}
