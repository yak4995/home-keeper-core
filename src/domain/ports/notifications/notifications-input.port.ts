import { CustomRecord } from '../../custom-record.type';

export interface NotificationsInputPort {
  // method is type of transport (for example email or sms or HTTP, etc), some enum
  // sender and reciever (for example email/phone/port/URL)
  sendMessage(method: string, sender: string, reciever: string, message: CustomRecord): Promise<boolean>;
}
