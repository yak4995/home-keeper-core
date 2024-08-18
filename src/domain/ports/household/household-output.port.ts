import { OutputPort } from '..';
import { IHousehold, IHouseholdInvitation } from '../..';

export interface HouseholdOutputPort
  extends OutputPort<{
    // from household member
    getSentInvitations: [IHouseholdInvitation[], object];
    createInvitation: [{ result: boolean }, object];
    deleteInvitation: [IHouseholdInvitation, object];

    getUserHouseholds: [IHousehold[], object];
    getHousehold: [IHousehold, object];

    createHousehold: [IHousehold, object];
    updateHousehold: [{ result: boolean }, object];
    leave: [{ result: boolean }, object];

    // from external user
    getInvitations: [string[], object];
    accept: [{ result: boolean }, object];
    reject: [{ result: boolean }, object];

    // from system
    deleteHousehold: [{ result: boolean }, object];
  }> {}
