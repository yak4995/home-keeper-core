import { HouseholdInputPort } from '../..';

export interface HouseholdOutputPort {
  invite<R>(output: Awaited<ReturnType<HouseholdInputPort['invite']>>, exception: unknown): Promise<R>;
  getInvitations<R>(output: Awaited<ReturnType<HouseholdInputPort['getInvitations']>>, exception: unknown): Promise<R>;
  getSentInvitations<R>(
    output: Awaited<ReturnType<HouseholdInputPort['getSentInvitations']>>,
    exception: unknown[],
  ): Promise<R>;
  deleteInvitation<R>(
    output: Awaited<ReturnType<HouseholdInputPort['deleteInvitation']>>,
    exception: unknown,
  ): Promise<R>;
  accept<R>(output: Awaited<ReturnType<HouseholdInputPort['accept']>>, exception: unknown): Promise<R>;
  reject<R>(output: Awaited<ReturnType<HouseholdInputPort['reject']>>, exception: unknown): Promise<R>;
  leave<R>(output: Awaited<ReturnType<HouseholdInputPort['leave']>>, exception: unknown): Promise<R>;
  createHousehold<R>(
    output: Awaited<ReturnType<HouseholdInputPort['createHousehold']>>,
    exception: unknown,
  ): Promise<R>;
  getUserHouseholds<R>(
    output: Awaited<ReturnType<HouseholdInputPort['getUserHouseholds']>>,
    exception: unknown,
  ): Promise<R>;
  getHousehold<R>(output: Awaited<ReturnType<HouseholdInputPort['getHousehold']>>, exception: unknown): Promise<R>;
  editHousehold<R>(output: Awaited<ReturnType<HouseholdInputPort['editHousehold']>>, exception: unknown): Promise<R>;
  deleteHousehold<R>(
    output: Awaited<ReturnType<HouseholdInputPort['deleteHousehold']>>,
    exception: unknown,
  ): Promise<R>;
}
