import { IPersistantEntity, IBudget, ICurrency, ITransactionCategory, ITransaction } from '../..';

export interface IBudgetItem extends IPersistantEntity {
  dedicatedSum: number;
  budget: IBudget;
  parent?: IBudgetItem;
  category?: ITransactionCategory;
  currency: ICurrency;
  transactions: ITransaction[];

  getIncomesSum: () => number;
  getOutcomesSum: () => number;
  getDedicatedIncomesSum: () => number;
  getDedicatedOutcomesSum: () => number;
}
