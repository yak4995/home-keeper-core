import { Criteria, IEntityCreator, IHousehold, IRepository } from '../../../..';

export abstract class HouseholdAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IHousehold>) {}

  protected static instance: HouseholdAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IHousehold>;

  public createEntityInstance(fields: Criteria<IHousehold>): Promise<IHousehold> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: HouseholdAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): HouseholdAbstractFactory {
    return this.instance;
  }
}
