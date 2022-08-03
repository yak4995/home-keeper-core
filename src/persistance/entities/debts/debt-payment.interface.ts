import { IPersistantEntity, IDebt } from 'persistance';

export interface IDebtPayment extends IPersistantEntity {
  date: Date;
  sum: number;
  debt: IDebt;
}
