import { IIdentificationDto, ISubscriptionDto, InputPort } from '..';
import { ID } from '../..';

export interface SubscriptionInputPort
  extends InputPort<{
    getSubscriptionsList: [{ ownerId: ID }, object];
    getSubscriptionDetails: [IIdentificationDto, object];

    createSubscription: [ISubscriptionDto, object];
    updateSubscription: [IIdentificationDto & ISubscriptionDto, object];
    deleteSubscription: [IIdentificationDto, object];
  }> {}
