import { IPersistantEntity, IEntityCreator, Criteria, IRepository } from '@persistance';

// For instantiating objects of related classes without their source dependency
// It links object instaintiating and their repo with the same internal implementation
export abstract class EntityAbstractFactory<T extends IPersistantEntity> {
  protected constructor(private entityCreator: IEntityCreator<T>) {}

  public createEntityInstance(fields: Criteria<T>): Promise<T> {
    return Promise.resolve(this.entityCreator.getInstance(fields));
  }

  abstract createEntityRepo(): IRepository<T>;
}
