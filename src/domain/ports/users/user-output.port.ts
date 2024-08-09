import { OutputPort } from '..';
import { CustomGeneralType, IUser } from '../..';

export interface UserOutputPort
  extends OutputPort<{
    // only for administrators
    getAllUsers: [IUser[], CustomGeneralType];
    // mixed
    getUserById: [IUser, CustomGeneralType];

    // for internal usage
    createUser: [IUser, CustomGeneralType];
    // only for administrators
    updateUser: [IUser, CustomGeneralType];
    // ony for user itself
    changeProfileInfo: [IUser, CustomGeneralType];
    deleteAccount: [IUser, CustomGeneralType];
  }> {}
