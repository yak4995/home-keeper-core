import { Bank, ID } from '../../domain';

export interface IImportService {
  importTransactions(
    payload: {
      bank: Bank;
      accountId: ID;
      bankStatement: {
        originalname: string;
        mimetype: string;
        buffer: Buffer;
      };
    },
    opts: Record<string, unknown>,
  ): Promise<object>;
}
