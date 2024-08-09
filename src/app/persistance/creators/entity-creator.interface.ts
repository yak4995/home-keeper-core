import { IPersistantEntity, Criteria } from '../../..';

// Factory method pattern: base interface for all persistance entity creators
export interface IEntityCreator<T extends IPersistantEntity> {
  getInstance(fields: Criteria<T>): Promise<T>;
}
