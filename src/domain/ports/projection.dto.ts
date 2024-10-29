import { ProjectionCriteria } from '../criteria.type';
import { IPersistantEntity } from '../entities';

export interface IProjectionDto<T extends IPersistantEntity> {
  projection?: ProjectionCriteria<T>;
}
