import { SubscriptionInputPort } from '../..';

export interface SubscriptionOutputPort {
  getSubscriptionsList<R>(
    output: Awaited<ReturnType<SubscriptionInputPort['getSubscriptionsList']>>,
    exception: unknown,
  ): Promise<R>;
  getSubscriptionDetails<R>(
    output: Awaited<ReturnType<SubscriptionInputPort['getSubscriptionDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addSubscription<R>(
    output: Awaited<ReturnType<SubscriptionInputPort['addSubscription']>>,
    exception: unknown,
  ): Promise<R>;
  editSubscription<R>(
    output: Awaited<ReturnType<SubscriptionInputPort['editSubscription']>>,
    exception: unknown,
  ): Promise<R>;
  deleteSubscription<R>(
    output: Awaited<ReturnType<SubscriptionInputPort['deleteSubscription']>>,
    exception: unknown,
  ): Promise<R>;
}
