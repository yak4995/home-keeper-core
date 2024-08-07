import { Criteria, IAccount, IEntityCreator, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class AccountAbstractFactory extends EntityAbstractFactory<IAccount> {
  protected constructor(entityCreator: IEntityCreator<IAccount>) {
    super(entityCreator);
  }

  protected static instance: AccountAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IAccount>;

  public createEntityInstance(fields: Criteria<IAccount>): Promise<IAccount> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: AccountAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): AccountAbstractFactory {
    return this.instance;
  }
}
