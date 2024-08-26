import { Criteria, OrderCriteria } from '../criteria.type';
import { IPersistantEntity } from '../entities';

export interface IListDto<T extends IPersistantEntity> {
  filter?: object;
  sort?: OrderCriteria<T>;
  page?: number;
  perPage?: number;
}
