import { ID } from '../entities';

export interface CurrencyConverterService {
  getRateFor(
    payload: {
      from: ID;
      to: ID;
      forDate: Date;
    },
    opts: Record<string, unknown>,
  ): Promise<{ rate: number }>;
}
