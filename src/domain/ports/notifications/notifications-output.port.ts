export interface NotificationsOutputPort {
  sendMessage(output: boolean): Promise<boolean>;
}
