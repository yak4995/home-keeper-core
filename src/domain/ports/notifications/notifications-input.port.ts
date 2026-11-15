import { IListDto, InputPort } from '..';
import { ID, INotification } from '../..';

export interface NotificationsInputPort
  extends InputPort<{
    // method is type of transport (for example email or sms or HTTP, etc), some enum
    // sender and reciever (for example email/phone/port/URL)
    sendMessage: [{ method: string; sender: string; reciever: string; message: object }, object];

    getUserMessages: [IListDto<INotification>, object];
    markAsRead: [{ ids: ID[] }, object];
    deleteMessages: [{ ids: ID[] }, object];
    /*
      This is used in the context of a saga to restore notifications
      that were deleted as part of a larger operation
      that failed and needs to be rolled back.
    */
    restoreNotifications: [{ notifications: INotification[] }, void];
  }> {}
