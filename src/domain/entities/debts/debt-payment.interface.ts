import { IPersistantEntity, IDebt } from '..';

export interface IDebtPayment extends IPersistantEntity {
  date: Date;
  sum: number;
  debt: IDebt;
}
