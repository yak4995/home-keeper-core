import { ICurrency, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class CurrencyAbstractFactory extends EntityAbstractFactory<ICurrency> {
  protected constructor(entityCreator: IEntityCreator<ICurrency>) {
    super(entityCreator);
  }

  protected static instance: CurrencyAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ICurrency>;

  public createEntityInstance(fields: Partial<ICurrency>): Promise<ICurrency> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: CurrencyAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): CurrencyAbstractFactory {
    return this.instance;
  }
}
