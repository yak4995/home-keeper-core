import { EntityAbstractFactory, IMaintenanceItem } from '../..';

export abstract class MaintenanceItemAbstractFactory extends EntityAbstractFactory<IMaintenanceItem> {
  public static setInstance(instance: MaintenanceItemAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: MaintenanceItemAbstractFactory = null;

  public static getInstance(): MaintenanceItemAbstractFactory {
    return this.instance;
  }
}
