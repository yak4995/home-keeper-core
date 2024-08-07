import { Criteria, IEntityCreator, IRepository, ITimezone } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class TimezoneAbstractFactory extends EntityAbstractFactory<ITimezone> {
  protected constructor(entityCreator: IEntityCreator<ITimezone>) {
    super(entityCreator);
  }

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
