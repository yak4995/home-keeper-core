import { FilterCriteria, OrderCriteria, ProjectionCriteria } from '../criteria.type';
import { IPersistantEntity } from '../entities';

export interface IListDto<T extends IPersistantEntity> {
  filter?: FilterCriteria<T>;
  sort?: OrderCriteria<T>;
  projection?: ProjectionCriteria<T>;
  page?: number;
  perPage?: number;
}
