import { OutputPort, UserInputPort } from '../..';

export interface UserOutputPort
  extends OutputPort<
    'addUser' | 'getUserById' | 'changeProfileInfo' | 'deleteAccount' | 'updateUser' | 'getAllUsers',
    UserInputPort
  > {}
