import { Criteria, EntityAbstractFactory, IEntityCreator, IRepository, IUser } from '../../../..';

export abstract class UserAbstractFactory extends EntityAbstractFactory<IUser> {
  protected constructor(entityCreator: IEntityCreator<IUser>) {
    super(entityCreator);
  }

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
