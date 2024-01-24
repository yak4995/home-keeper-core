import { OutputPort, SubscriptionInputPort } from '../..';

export interface SubscriptionOutputPort
  extends OutputPort<
    'getSubscriptionsList' | 'getSubscriptionDetails' | 'addSubscription' | 'editSubscription' | 'deleteSubscription',
    SubscriptionInputPort
  > {}
