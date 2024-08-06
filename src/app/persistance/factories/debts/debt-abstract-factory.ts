import { Criteria, IDebt, IEntityCreator, IRepository } from '../../../..';

export abstract class DebtAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IDebt>) {}

  protected static instance: DebtAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IDebt>;

  public createEntityInstance(fields: Criteria<IDebt>): Promise<IDebt> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: DebtAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): DebtAbstractFactory {
    return this.instance;
  }
}
