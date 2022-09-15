import { EntityAbstractFactory, IUser } from '../../../..';

export abstract class UserAbstractFactory extends EntityAbstractFactory<IUser> {
  public static setInstance(instance: UserAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: UserAbstractFactory = null;

  public static getInstance(): UserAbstractFactory {
    return this.instance;
  }
}
