import { Criteria, IEntityCreator, IRepository, IUser } from '../../../..';

export abstract class UserAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<IUser>) {}

  protected static instance: UserAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IUser>;

  public createEntityInstance(fields: Criteria<IUser>): Promise<IUser> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: UserAbstractFactory): void {
    this.instance = instance;
  }
  public static getInstance(): UserAbstractFactory {
    return this.instance;
  }
}
