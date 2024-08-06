import { Criteria, IAccount, IEntityCreator, IRepository } from '../../../..';

export abstract class AccountAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IAccount>) {}

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
