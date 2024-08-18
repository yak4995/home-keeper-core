import { IIdentificationDto, IUserDto, IUserProfileDto, InputPort } from '..';
import { CustomRecord } from '../..';

export interface UserInputPort
  extends InputPort<{
    // only for administrators
    getAllUsers: [undefined, object];
    // mixed
    getUserById: [IIdentificationDto, object];

    // for internal usage
    createUser: [CustomRecord, object];
    // only for administrators
    updateUser: [IIdentificationDto & IUserDto, object];
    // ony for user itself
    changeProfileInfo: [IIdentificationDto & IUserProfileDto, object];
    deleteAccount: [IIdentificationDto, object];
  }> {}
