import { Criteria, IEntityCreator, IEstimationProjectItem, IRepository } from '../../../..';

export abstract class EstimationProjectItemAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IEstimationProjectItem>) {}

  protected static instance: EstimationProjectItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IEstimationProjectItem>;

  public createEntityInstance(fields: Criteria<IEstimationProjectItem>): Promise<IEstimationProjectItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: EstimationProjectItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): EstimationProjectItemAbstractFactory {
    return this.instance;
  }
}
