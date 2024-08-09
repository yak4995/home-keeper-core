import { InputPort } from '..';
import { CustomGeneralType, ID, IIdentificationDto } from '../..';

export interface HouseholdInputPort
  extends InputPort<{
    // from household member:
    getSentInvitations: [IIdentificationDto, CustomGeneralType];
    createInvitation: [{ userId: ID } & IIdentificationDto, CustomGeneralType];
    deleteInvitation: [IIdentificationDto, CustomGeneralType];

    getUserHouseholds: [{ memberId: ID }, CustomGeneralType];
    getHousehold: [IIdentificationDto, CustomGeneralType];

    createHousehold: [{ memberId: ID; name: string }, CustomGeneralType];
    updateHousehold: [{ name: string } & IIdentificationDto, CustomGeneralType];
    leave: [{ userId: ID } & IIdentificationDto, CustomGeneralType];

    // from external user:
    getInvitations: [{ userId: ID }, CustomGeneralType];
    accept: [{ userId: ID } & IIdentificationDto, CustomGeneralType];
    reject: [{ userId: ID } & IIdentificationDto, CustomGeneralType];

    // from system:
    deleteHousehold: [IIdentificationDto, CustomGeneralType];
  }> {}
