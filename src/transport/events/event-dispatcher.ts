import { IEvent, IEventListener } from '@transport';

export abstract class EventDispatcher<T extends IEvent> {
  constructor(protected eventListeners: IEventListener<T>[]) {}

  protected abstract processEvent(): Promise<void>;

  public abstract emit(event: T): Promise<boolean>;
}
