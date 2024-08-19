import { IIdentificationDto, IUserDto, IUserProfileDto, InputPort } from '..';

export interface UserInputPort
  extends InputPort<{
    // only for administrators
    getAllUsers: [undefined, object];
    // mixed
    getUserById: [IIdentificationDto, object];

    // for internal usage
    createUser: [object, object];
    // only for administrators
    updateUser: [IIdentificationDto & IUserDto, object];
    // ony for user itself
    changeProfileInfo: [IIdentificationDto & IUserProfileDto, object];
    deleteAccount: [IIdentificationDto, object];
  }> {}
