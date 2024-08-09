import { IIdentificationDto, IUserDto, IUserProfileDto, InputPort } from '..';
import { CustomGeneralType, CustomRecord } from '../..';

export interface UserInputPort
  extends InputPort<{
    // only for administrators
    getAllUsers: [undefined, CustomGeneralType];
    // mixed
    getUserById: [IIdentificationDto, CustomGeneralType];

    // for internal usage
    createUser: [CustomRecord, CustomGeneralType];
    // only for administrators
    updateUser: [IIdentificationDto & IUserDto, CustomGeneralType];
    // ony for user itself
    changeProfileInfo: [IIdentificationDto & IUserProfileDto, CustomGeneralType];
    deleteAccount: [IIdentificationDto, CustomGeneralType];
  }> {}
