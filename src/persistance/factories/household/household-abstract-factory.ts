import { EntityAbstractFactory, IHousehold } from '@persistance';

export abstract class HouseholdAbstractFactory extends EntityAbstractFactory<IHousehold> {
  public static setInstance(instance: HouseholdAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: HouseholdAbstractFactory = null;

  public static getInstance(): HouseholdAbstractFactory {
    return this.instance;
  }
}
