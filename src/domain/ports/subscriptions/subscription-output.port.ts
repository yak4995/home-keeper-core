import { OutputPort } from '..';
import { ISubscription, CustomGeneralType } from '../..';

export interface SubscriptionOutputPort
  extends OutputPort<{
    getSubscriptionsList: [ISubscription[], CustomGeneralType];
    getSubscriptionDetails: [ISubscription, CustomGeneralType];

    createSubscription: [ISubscription, CustomGeneralType];
    updateSubscription: [ISubscription, CustomGeneralType];
    deleteSubscription: [ISubscription, CustomGeneralType];
  }> {}
