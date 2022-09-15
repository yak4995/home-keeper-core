import { IEvent } from '.';

export interface IEventListener<T extends IEvent> {
  handle(event: T): Promise<boolean>;
}
