import { ID, IRepository, ITransactionCategory, ListResponse } from '../../../..';

export interface ITransactionCategoryRepository extends IRepository<ITransactionCategory> {
  geAllChildren(
    payload: { id: ID; ownerId?: ID },
    opts: Record<string, unknown>,
  ): Promise<ListResponse<ITransactionCategory>>;
  getDepth(id: ID, opts: Record<string, unknown>): Promise<number>;
}
