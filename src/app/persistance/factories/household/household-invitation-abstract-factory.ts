import { IEntityCreator, IHouseholdInvitation, IRepository } from '../../../..';
import { EntityAbstractFactory } from '../../factories/entity-abstract-factory';

export abstract class HouseholdInvitationAbstractFactory extends EntityAbstractFactory<IHouseholdInvitation> {
  protected constructor(entityCreator: IEntityCreator<IHouseholdInvitation>) {
    super(entityCreator);
  }

  protected static instance: HouseholdInvitationAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IHouseholdInvitation>;

  public createEntityInstance(fields: Partial<IHouseholdInvitation>): Promise<IHouseholdInvitation> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: HouseholdInvitationAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): HouseholdInvitationAbstractFactory {
    return this.instance;
  }
}
