import { Criteria, IEntityCreator, IEstimationProject, IRepository } from '../../../..';

export abstract class EstimationProjectAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IEstimationProject>) {}

  protected static instance: EstimationProjectAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IEstimationProject>;

  public createEntityInstance(fields: Criteria<IEstimationProject>): Promise<IEstimationProject> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: EstimationProjectAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): EstimationProjectAbstractFactory {
    return this.instance;
  }
}
