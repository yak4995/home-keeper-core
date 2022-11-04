import { Criteria, ICurrency, IEntityCreator, IRepository } from '../../../..';

export abstract class CurrencyAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<ICurrency>) {}

  protected static instance: CurrencyAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ICurrency>;

  public createEntityInstance(fields: Criteria<ICurrency>): Promise<ICurrency> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: CurrencyAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): CurrencyAbstractFactory {
    return this.instance;
  }
}
