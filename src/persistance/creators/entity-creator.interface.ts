import { IPersistantEntity, Criteria } from '..';

// base interface for all persistance entity creators
export interface IEntityCreator<T extends IPersistantEntity> {
  getInstance(fields: Criteria<T>): Promise<T>;
}
