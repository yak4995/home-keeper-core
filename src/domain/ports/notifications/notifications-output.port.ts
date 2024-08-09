import { OutputPort } from '..';
import { CustomGeneralType } from '../..';

export interface NotificationsOutputPort
  extends OutputPort<{
    // method is type of transport (for example email or sms or HTTP, etc), some enum
    // sender and reciever (for example email/phone/port/URL)
    sendMessage: [boolean, CustomGeneralType];
  }> {}
