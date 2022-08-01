import { IEvent } from '@transport';

export interface IEventListener<T extends IEvent> {
  handle(event: T): Promise<boolean>;
}
