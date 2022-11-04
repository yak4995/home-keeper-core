import { Criteria, IEntityCreator, IMaintenanceItem, IRepository } from '../../../..';

export abstract class MaintenanceItemAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IMaintenanceItem>) {}

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
