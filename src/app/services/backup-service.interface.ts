import { ID } from '../../domain';

export interface IBackupService {
  backup(payload: { userId: ID }, opts: Record<string, unknown>): Promise<object>;
  restore(payload: object, opts: Record<string, unknown>): Promise<object>;
}
