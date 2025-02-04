import { IIdentificationDto, IListDto, IProjectionDto, IUserDto, IUserProfileDto, InputPort } from '..';
import { ID, IUser } from '../..';

export interface UserInputPort
  extends InputPort<{
    // only for administrators
    getAllUsers: [IListDto<IUser>, object];
    // mixed
    getUserById: [IIdentificationDto & IProjectionDto<IUser>, object];

    // for internal usage
    createUser: [object, object];
    // only for administrators
    updateUser: [IIdentificationDto & IUserDto, object];
    // ony for user itself
    changeProfileInfo: [IIdentificationDto & IUserProfileDto, object];
    deleteAccount: [IIdentificationDto, object];

    // for clearing cache, etc...
    syncState: [{ userIds: ID[] }, object];
  }> {}
