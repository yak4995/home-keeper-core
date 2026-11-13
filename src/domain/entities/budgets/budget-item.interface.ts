import { IPersistantEntity, IBudget, ITransactionCategory } from '..';

export interface IBudgetItem extends IPersistantEntity {
  budget: IBudget;
  parent?: IBudgetItem;
  category: ITransactionCategory;
  dedicatedSum: number;
}
