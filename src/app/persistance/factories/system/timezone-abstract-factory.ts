import { Criteria, IEntityCreator, IRepository, ITimezone } from '../../../..';

export abstract class TimezoneAbstractFactory {
  protected constructor(protected entityCreator: IEntityCreator<ITimezone>) {}

  protected static instance: TimezoneAbstractFactory = null;

  abstract createEntityRepo(): IRepository<ITimezone>;

  public createEntityInstance(fields: Criteria<ITimezone>): Promise<ITimezone> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: TimezoneAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): TimezoneAbstractFactory {
    return this.instance;
  }
}
