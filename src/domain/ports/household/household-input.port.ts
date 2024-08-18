import { InputPort } from '..';
import { ID, IIdentificationDto } from '../..';

export interface HouseholdInputPort
  extends InputPort<{
    // from household member:
    getSentInvitations: [IIdentificationDto, object];
    createInvitation: [{ userId: ID } & IIdentificationDto, object];
    deleteInvitation: [IIdentificationDto, object];

    getUserHouseholds: [{ memberId: ID }, object];
    getHousehold: [IIdentificationDto, object];

    createHousehold: [{ memberId: ID; name: string }, object];
    updateHousehold: [{ name: string } & IIdentificationDto, object];
    leave: [{ userId: ID } & IIdentificationDto, object];

    // from external user:
    getInvitations: [{ userId: ID }, object];
    accept: [{ userId: ID } & IIdentificationDto, object];
    reject: [{ userId: ID } & IIdentificationDto, object];

    // from system:
    deleteHousehold: [IIdentificationDto, object];
  }> {}
