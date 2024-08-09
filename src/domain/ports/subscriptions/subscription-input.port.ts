import { IIdentificationDto, ISubscriptionDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface SubscriptionInputPort
  extends InputPort<{
    getSubscriptionsList: [{ ownerId: ID }, CustomGeneralType];
    getSubscriptionDetails: [IIdentificationDto, CustomGeneralType];

    createSubscription: [ISubscriptionDto, CustomGeneralType];
    updateSubscription: [IIdentificationDto & ISubscriptionDto, CustomGeneralType];
    deleteSubscription: [IIdentificationDto, CustomGeneralType];
  }> {}
