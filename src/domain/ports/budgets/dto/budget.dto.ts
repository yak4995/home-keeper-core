import { ID } from '../../../entities';

export interface IBudgetDto {
  ownerId: ID;
  currencyId: ID;
  startDate: Date;
  endDate: Date;
}
