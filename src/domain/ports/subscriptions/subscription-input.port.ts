import { ISubscriptionDto, InputPort } from '..';
import { ID, ISubscription } from '../..';

export interface SubscriptionInputPort
  extends InputPort<
    'getSubscriptionsList' | 'getSubscriptionDetails' | 'addSubscription' | 'editSubscription' | 'deleteSubscription'
  > {
  getSubscriptionsList(ownerId: ID): Promise<ISubscription[]>;
  getSubscriptionDetails(id: ID): Promise<ISubscription>;
  addSubscription(payload: ISubscriptionDto): Promise<ISubscription>;
  editSubscription(id: ID, payload: ISubscriptionDto): Promise<ISubscription>;
  deleteSubscription(id: ID): Promise<ISubscription>;
}
