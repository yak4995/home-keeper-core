import { ID } from '../../..';

export interface IStockTransactionListDto {
  page: number;
  perPage: number;
  orderBy: string;
  orderDir: 'ASC' | 'DESC';
  isOutcome: boolean;
  stockItemId: ID;
}
