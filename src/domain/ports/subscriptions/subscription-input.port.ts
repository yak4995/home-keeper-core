import { ID, ISubscription } from '../..';
import { ISubscriptionDto } from '..';

export interface SubscriptionInputPort {
  getSubscriptionsList(ownerId: ID): Promise<ISubscription[]>;
  getSubscriptionDetails(id: ID): Promise<ISubscription>;
  addSubscription(payload: ISubscriptionDto): Promise<ISubscription>;
  editSubscription(id: ID, payload: ISubscriptionDto): Promise<ISubscription>;
  deleteSubscription(id: ID): Promise<ISubscription>;
}
