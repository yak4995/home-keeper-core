import { EntityAbstractFactory, IHouseholdInvitation } from '../..';

export abstract class HouseholdInvitationAbstractFactory extends EntityAbstractFactory<IHouseholdInvitation> {
  public static setInstance(instance: HouseholdInvitationAbstractFactory): void {
    this.instance = instance;
  }

  protected static instance: HouseholdInvitationAbstractFactory = null;

  public static getInstance(): HouseholdInvitationAbstractFactory {
    return this.instance;
  }
}
