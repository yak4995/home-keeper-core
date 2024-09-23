import { OutputPort } from '..';
import { ISubscription, ListResponse } from '../..';

export interface SubscriptionOutputPort
  extends OutputPort<{
    getSubscriptionsList: [ListResponse<ISubscription>, object];
    getSubscriptionDetails: [ISubscription, object];

    createSubscription: [ISubscription, object];
    updateSubscription: [ISubscription, object];
    deleteSubscription: [ISubscription, object];
  }> {}
