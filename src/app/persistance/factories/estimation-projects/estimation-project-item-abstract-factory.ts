import { IEntityCreator, IEstimationProjectItem, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class EstimationProjectItemAbstractFactory extends EntityAbstractFactory<IEstimationProjectItem> {
  protected constructor(entityCreator: IEntityCreator<IEstimationProjectItem>) {
    super(entityCreator);
  }

  protected static instance: EstimationProjectItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IEstimationProjectItem>;

  public createEntityInstance(fields: Partial<IEstimationProjectItem>): Promise<IEstimationProjectItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: EstimationProjectItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): EstimationProjectItemAbstractFactory {
    return this.instance;
  }
}
