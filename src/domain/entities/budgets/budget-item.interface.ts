import { IPersistantEntity, IBudget, ICurrency, ITransactionCategory, ITransaction } from '..';

export interface IBudgetItem extends IPersistantEntity {
  budget: IBudget;
  parent?: IBudgetItem;
  category: ITransactionCategory;
  dedicatedSum: number;
}
