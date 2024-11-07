import { IIdentificationDto, OutputPort } from '..';
import { ListResponse, INotification, ID } from '../..';

export interface NotificationsOutputPort
  extends OutputPort<{
    // method is type of transport (for example email or sms or HTTP, etc), some enum
    // sender and reciever (for example email/phone/port/URL)
    sendMessage: [{ result: boolean }, object];

    getUserMessages: [ListResponse<INotification>, object];
    markAsRead: [{ result: boolean }, object];
    deleteMessages: [INotification[], object];
  }> {}
