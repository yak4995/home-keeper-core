import { IDebt, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class DebtAbstractFactory extends EntityAbstractFactory<IDebt> {
  protected constructor(entityCreator: IEntityCreator<IDebt>) {
    super(entityCreator);
  }

  protected static instance: DebtAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IDebt>;

  public createEntityInstance(fields: Partial<IDebt>): Promise<IDebt> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: DebtAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): DebtAbstractFactory {
    return this.instance;
  }
}
