import { ID, IPersistantEntity, ListResponse } from '../../domain';
import { IRepository } from '..';

export abstract class IHierarchyService<T extends IPersistantEntity & { parent?: T }> {
  constructor(protected readonly repository: IRepository<T>) {}

  abstract getParent(id: ID, opts: Record<string, unknown>): Promise<T | null>;
  abstract getDirectChildren(
    payload: { id: ID; ownerId?: ID },
    opts: Record<string, unknown>,
  ): Promise<ListResponse<T>>;
  abstract geAllChildren(payload: { id: ID; ownerId?: ID }, opts: Record<string, unknown>): Promise<ListResponse<T>>;
  abstract getSiblings(payload: { id: ID; ownerId?: ID }, opts: Record<string, unknown>): Promise<ListResponse<T>>;
  abstract getDepth(id: ID, opts: Record<string, unknown>): Promise<number>;
}
