import { Criteria, IEntityCreator, IRepository, ITax } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TaxAbstractFactory extends EntityAbstractFactory<ITax> {
  protected constructor(entityCreator: IEntityCreator<ITax>) {
    super(entityCreator);
  }

  protected static instance: TaxAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITax>;

  public createEntityInstance(fields: Criteria<ITax>): Promise<ITax> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TaxAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TaxAbstractFactory {
    return this.instance;
  }
}
