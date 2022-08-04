import { ID, IPersistantEntity, IRepository } from '../persistance';

export abstract class IHierarchyService<T extends IPersistantEntity & { parent?: T }> {
  constructor(protected readonly repository: IRepository<T>) {}

  abstract getParent(id: ID): Promise<T | null>;
  abstract getDirectChildren(id: ID, ownerId: ID): Promise<T[]>;
  abstract geAllChildren(id: ID, ownerId: ID): Promise<T[]>;
  abstract getSiblings(id: ID, ownerId: ID): Promise<T[]>;
  abstract getDepth(id: ID): Promise<number>;
}
