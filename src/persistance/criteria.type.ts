import { IPersistantEntity } from 'persistance';

export type Criteria<T extends IPersistantEntity> = {
  [P in keyof T]?: any | [any, any]; // [any, any] - from-to values for range filtering
};

export type OrderCriteria<T extends IPersistantEntity> = {
  [P in keyof T]?: 'ASC' | 'DESC';
};
