import { UserAbstractFactory } from './user-abstract-factory';

import { IRepository } from '../../repositories';
import { IEntityCreator } from '../../creators';
import { IWebUser } from '../../entities';

import { Criteria } from '../../../../domain/criteria.type';
import { IUser } from '../../../../domain/entities';

export abstract class WebUserAbstractFactory extends UserAbstractFactory {
  protected constructor(entityCreator: IEntityCreator<IWebUser>) {
    super(entityCreator);
  }

  protected static instance: WebUserAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IWebUser>;

  public createEntityInstance(fields: Criteria<IWebUser>): Promise<IUser> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: WebUserAbstractFactory): void {
    this.instance = instance;
  }
  public static getInstance(): WebUserAbstractFactory {
    return this.instance;
  }
}
