import { OutputPort } from '..';
import { IUser, ListResponse } from '../..';

export interface UserOutputPort
  extends OutputPort<{
    // only for administrators
    getAllUsers: [ListResponse<IUser>, object];
    // mixed
    getUserById: [IUser, object];

    // for internal usage
    createUser: [IUser, object];
    // only for administrators
    updateUser: [IUser, object];
    // ony for user itself
    changeProfileInfo: [IUser, object];
    deleteAccount: [IUser, object];
  }> {}
