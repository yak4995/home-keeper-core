import { OutputPort } from '../output-port.type';
import { NotificationsInputPort } from './notifications-input.port';

export interface NotificationsOutputPort
  extends OutputPort<'sendMessage' /* | 'another action' | ...*/, NotificationsInputPort> {}
