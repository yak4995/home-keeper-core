import { IHousehold, IHouseholdInvitation } from '@persistance';

export interface HouseholdOutputPort {
  invite(output: boolean): Promise<any>;
  getInvitations(output: string[]): Promise<any>;
  getSentInvitations(output: IHouseholdInvitation[]): Promise<any>;
  deleteInvitation(output: IHouseholdInvitation): Promise<any>;
  accept(output: boolean): Promise<any>;
  reject(output: boolean): Promise<any>;
  leave(output: boolean): Promise<any>;
  createHousehold(output: boolean): Promise<any>;
  getUserHouseholds(output: IHousehold[]): Promise<any>;
  getHousehold(output: IHousehold): Promise<any>;
  editHousehold(output: boolean): Promise<any>;
  deleteHousehold(output: boolean): Promise<any>;
}
