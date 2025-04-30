import {
  IRepository,
  IBudgetItem,
  ListResponse,
  IIdentificationDto,
  ID,
  IBudgetAnalyticDto,
  IBudgetChangeAnalyticDto,
} from '../../../..';

export interface IBudgetItemRepository extends IRepository<IBudgetItem> {
  geAllChildren(payload: IIdentificationDto, opts: Record<string, unknown>): Promise<ListResponse<IBudgetItem>>;
  getDepth(id: ID, opts: Record<string, unknown>): Promise<number>;
  getRatioByAggregate(
    payload: Pick<IBudgetAnalyticDto, 'budgetItemId'>,
    opts: Record<string, unknown>,
  ): Promise<{ [key: string]: number }>;
  getChangeByAggregate(
    payload: Omit<IBudgetChangeAnalyticDto, 'type' | 'accountIds'>,
    opts: Record<string, unknown>,
  ): Promise<
    {
      period: string;
      currentValue: number | null;
      prevValue: number | null;
      changePercent: number | null;
    }[]
  >;
}
