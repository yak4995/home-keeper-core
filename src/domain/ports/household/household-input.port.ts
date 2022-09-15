import { ID, IHousehold, IHouseholdInvitation } from '../..';

export interface HouseholdInputPort {
  // from household member
  invite(userId: ID, householdId: ID): Promise<boolean>;
  getSentInvitations(householdId: ID): Promise<IHouseholdInvitation[]>;
  deleteInvitation(id: ID): Promise<IHouseholdInvitation>;
  createHousehold(memberId: ID, name: string): Promise<IHousehold>;
  getUserHouseholds(memberId: ID): Promise<IHousehold[]>;
  getHousehold(id: ID): Promise<IHousehold>;
  editHousehold(id: ID, name: string): Promise<boolean>;
  leave(userId: ID, householdId: ID): Promise<boolean>;

  // from external user
  getInvitations(userId: ID): Promise<string[]>;
  accept(userId: ID, householdId: ID): Promise<boolean>;
  reject(userId: ID, householdId: ID): Promise<boolean>;

  // from system
  deleteHousehold(): Promise<boolean>;
}
