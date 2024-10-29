import { IPersistantEntity, IHouseholdInvitation, IUser, IAccount, IBudget, ITransactionCategory } from '..';

export interface IHousehold extends IPersistantEntity {
  name: string;
  isOwn: boolean;
  invitations: IHouseholdInvitation[];
  members: IUser[];

  accounts: IAccount[];
  budgets: IBudget[];
  transactionCategories: ITransactionCategory[];
}
