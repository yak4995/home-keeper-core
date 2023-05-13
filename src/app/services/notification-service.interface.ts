export interface INotificationService {
  sendMessage(method: any, sender: any, reciever: any, message: any): Promise<boolean>;
}
