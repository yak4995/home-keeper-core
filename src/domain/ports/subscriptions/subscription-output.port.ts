import { OutputPort } from '..';
import { ISubscription } from '../..';

export interface SubscriptionOutputPort
  extends OutputPort<{
    getSubscriptionsList: [ISubscription[], object];
    getSubscriptionDetails: [ISubscription, object];

    createSubscription: [ISubscription, object];
    updateSubscription: [ISubscription, object];
    deleteSubscription: [ISubscription, object];
  }> {}
