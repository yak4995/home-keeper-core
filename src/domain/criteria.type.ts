import { IPersistantEntity } from '.';

export type Criteria<T extends IPersistantEntity> = {
  [P in keyof T]?: T[P] | [T[P], T[P]]; // [T[P], T[P]] - from-to values for range filtering
};

export type OrderCriteria<T extends IPersistantEntity> = {
  [P in keyof T]?: 'ASC' | 'DESC';
};
