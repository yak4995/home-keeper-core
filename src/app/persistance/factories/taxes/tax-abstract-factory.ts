import { Criteria, IEntityCreator, IRepository, ITax } from '../../../..';

export abstract class TaxAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ITax>) {}

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
