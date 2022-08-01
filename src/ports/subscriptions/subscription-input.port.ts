import { ID, ISubscription } from '@persistance';
import { ISubscriptionDto } from '@ports';

export interface SubscriptionInputPort {
  getSubscriptionsList(ownerId: ID): Promise<ISubscription[]>;
  getSubscriptionDetails(id: ID): Promise<ISubscription>;
  addSubscription(payload: ISubscriptionDto): Promise<ISubscription>;
  editSubscription(id: ID, payload: ISubscriptionDto): Promise<ISubscription>;
  deleteSubscription(id: ID): Promise<ISubscription>;
}
