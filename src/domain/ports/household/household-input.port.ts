import { ID, IHousehold, IHouseholdInvitation, InputPort } from '../..';

export interface HouseholdInputPort
  extends InputPort<
    | 'invite'
    | 'getSentInvitations'
    | 'deleteInvitation'
    | 'createHousehold'
    | 'getUserHouseholds'
    | 'getHousehold'
    | 'editHousehold'
    | 'leave'
    | 'getInvitations'
    | 'accept'
    | 'reject'
    | 'deleteHousehold'
  > {
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
