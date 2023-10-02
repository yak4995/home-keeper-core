import { NotificationsInputPort } from './notifications-input.port';

export interface NotificationsOutputPort {
  sendMessage<R>(output: Awaited<ReturnType<NotificationsInputPort['sendMessage']>>, exception: unknown): Promise<R>;
}
