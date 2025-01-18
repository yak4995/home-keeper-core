import {
  FilterCriteria,
  ID,
  IRepository,
  ITransaction,
  ITransactionChangeAnalyticDto,
  ListResponse,
  OrderCriteria,
  ProjectionCriteria,
} from '../../../..';

export interface ITransactionRepository extends IRepository<ITransaction> {
  convertedList(
    payload: {
      targetCurrency: ID;
      filter?: FilterCriteria<ITransaction>;
      sort?: OrderCriteria<ITransaction>;
      projection?: ProjectionCriteria<ITransaction>;
      page?: number;
      perPage?: number;
    },
    opts: Record<string, unknown>,
  ): Promise<ListResponse<ITransaction>>;
  getMetricByAggregate(
    payload: Omit<ITransactionChangeAnalyticDto, 'granularity' | 'transactionCategoryId'> & {
      transactionCategoryId: ID[]; // array of all category children
    },
    opts: Record<string, unknown>,
  ): Promise<{ result: number }>;
  getRatioByAggregate(
    payload: Omit<ITransactionChangeAnalyticDto, 'granularity' | 'transactionCategoryId'> & {
      transactionCategoryId: ID[][]; // array of arrays, where internal arrays are all children of each direct child for original category
    },
    opts: Record<string, unknown>,
  ): Promise<{ [key: string]: number }>;
  getChangeByAggregate(
    payload: Omit<ITransactionChangeAnalyticDto, 'transactionCategoryId'> & {
      transactionCategoryId: ID[]; // array of all category children
    },
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
