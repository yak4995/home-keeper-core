import { HouseholdInputPort, OutputPort } from '../..';

export interface HouseholdOutputPort
  extends OutputPort<
    | 'invite'
    | 'getSentInvitations'
    | 'deleteInvitation'
    | 'createHousehold'
    | 'getUserHouseholds'
    | 'getHousehold'
    | 'editHousehold'
    | 'leave'
    | 'getInvitations'
    | 'accept'
    | 'reject'
    | 'deleteHousehold',
    HouseholdInputPort
  > {}
