import { Criteria, IEntityCreator, IMaintenanceItem, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class MaintenanceItemAbstractFactory extends EntityAbstractFactory<IMaintenanceItem> {
  protected constructor(entityCreator: IEntityCreator<IMaintenanceItem>) {
    super(entityCreator);
  }

  protected static instance: MaintenanceItemAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IMaintenanceItem>;

  public createEntityInstance(fields: Criteria<IMaintenanceItem>): Promise<IMaintenanceItem> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: MaintenanceItemAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): MaintenanceItemAbstractFactory {
    return this.instance;
  }
}
