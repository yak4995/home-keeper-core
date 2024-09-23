import { IPersistantEntity } from '../../..';

// Factory method pattern: base interface for all persistance entity creators
export interface IEntityCreator<T extends IPersistantEntity> {
  getInstance(fields: Partial<T>): Promise<T>;
}
