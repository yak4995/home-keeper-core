import { Criteria, IEntityCreator, IEstimationProject, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class EstimationProjectAbstractFactory extends EntityAbstractFactory<IEstimationProject> {
  protected constructor(entityCreator: IEntityCreator<IEstimationProject>) {
    super(entityCreator);
  }

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
