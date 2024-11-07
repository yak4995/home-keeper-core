import { IEntityCreator, INotification, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../entity-abstract-factory';

export abstract class NotificationAbstractFactory extends EntityAbstractFactory<INotification> {
  protected constructor(entityCreator: IEntityCreator<INotification>) {
    super(entityCreator);
  }

  protected static instance: NotificationAbstractFactory = null;

  abstract createEntityRepo(): IRepository<INotification>;

  public createEntityInstance(fields: Partial<INotification>): Promise<INotification> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: NotificationAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): NotificationAbstractFactory {
    return this.instance;
  }
}
