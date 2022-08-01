import { EntityAbstractFactory, ITimezone } from '@persistance';

export abstract class TimezoneAbstractFactory extends EntityAbstractFactory<ITimezone> {
  public static setInstance(instance: TimezoneAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: TimezoneAbstractFactory = null;

  public static getInstance(): TimezoneAbstractFactory {
    return this.instance;
  }
}
