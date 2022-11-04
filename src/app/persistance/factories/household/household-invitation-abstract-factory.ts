import { Criteria, IEntityCreator, IHouseholdInvitation, IRepository } from '../../../..';

export abstract class HouseholdInvitationAbstractFactory {
  protected constructor(private entityCreator: IEntityCreator<IHouseholdInvitation>) {}

  protected static instance: HouseholdInvitationAbstractFactory = null;

  abstract createEntityRepo(): IRepository<IHouseholdInvitation>;

  public createEntityInstance(fields: Criteria<IHouseholdInvitation>): Promise<IHouseholdInvitation> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  public static setInstance(instance: HouseholdInvitationAbstractFactory): void {
    this.instance = instance;
  }

  public static getInstance(): HouseholdInvitationAbstractFactory {
    return this.instance;
  }
}
