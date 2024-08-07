import { Criteria, IEntityCreator, IHousehold, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class HouseholdAbstractFactory extends EntityAbstractFactory<IHousehold> {
  protected constructor(entityCreator: IEntityCreator<IHousehold>) {
    super(entityCreator);
  }

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
