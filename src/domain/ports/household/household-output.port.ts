import { OutputPort } from '..';
import { CustomGeneralType, IHousehold, IHouseholdInvitation } from '../..';

export interface HouseholdOutputPort
  extends OutputPort<{
    // from household member
    getSentInvitations: [IHouseholdInvitation[], CustomGeneralType];
    createInvitation: [boolean, CustomGeneralType];
    deleteInvitation: [IHouseholdInvitation, CustomGeneralType];

    getUserHouseholds: [IHousehold[], CustomGeneralType];
    getHousehold: [IHousehold, CustomGeneralType];

    createHousehold: [IHousehold, CustomGeneralType];
    updateHousehold: [boolean, CustomGeneralType];
    leave: [boolean, CustomGeneralType];

    // from external user
    getInvitations: [string[], CustomGeneralType];
    accept: [boolean, CustomGeneralType];
    reject: [boolean, CustomGeneralType];

    // from system
    deleteHousehold: [boolean, CustomGeneralType];
  }> {}
