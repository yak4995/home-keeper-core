import { ISubscription } from '../../persistance';

export interface SubscriptionOutputPort {
  getSubscriptionsList(output: ISubscription[]): Promise<any>;
  getSubscriptionDetails(output: ISubscription): Promise<any>;
  addSubscription(output: ISubscription): Promise<any>;
  editSubscription(output: ISubscription): Promise<any>;
  deleteSubscription(output: ISubscription): Promise<any>;
}
