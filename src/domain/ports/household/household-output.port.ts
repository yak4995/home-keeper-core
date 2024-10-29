import { OutputPort } from '..';
import { IHousehold, IHouseholdInvitation } from '../..';

export interface HouseholdOutputPort
  extends OutputPort<{
    // from household member
    getSentInvitations: [IHouseholdInvitation[], object];
    createInvitation: [IHouseholdInvitation, object];
    deleteInvitation: [IHouseholdInvitation, object];

    getUserHouseholds: [IHousehold[], object];
    getHousehold: [IHousehold, object];

    createHousehold: [IHousehold, object];
    updateHousehold: [IHousehold, object];
    leave: [{ result: boolean }, object];

    // from external user
    getInvitations: [IHouseholdInvitation[], object];
    accept: [IHouseholdInvitation, object];
    reject: [IHouseholdInvitation, object];

    // from system
    deleteHousehold: [IHousehold, object];
  }> {}
