import { InputPort, IProjectionDto } from '..';
import { ID, IHousehold, IIdentificationDto } from '../..';

export interface HouseholdInputPort
  extends InputPort<{
    // from household member:
    getSentInvitations: [IIdentificationDto, object];
    createInvitation: [{ userId: ID } & IIdentificationDto, object];
    deleteInvitation: [{ userId: ID } & IIdentificationDto, object];

    getUserHouseholds: [{ memberId: ID } & IProjectionDto<IHousehold>, object];
    getHousehold: [IIdentificationDto & IProjectionDto<IHousehold>, object];

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
