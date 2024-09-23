import {
  IPersistantEntity,
  OrderCriteria,
  ID,
  ProjectionCriteria,
  FilterCriteria,
  ListResponse,
} from '../../../domain';

// Probably children: TypeOrmRepository<T>, MongoRepository<T>, XmlRepository<T>
export interface IRepository<T extends IPersistantEntity> {
  insert(entity: T, opts: Record<string, unknown>): Promise<T>;
  insertMany(entities: T[], opts: Record<string, unknown>): Promise<number>;

  list(
    payload: {
      filter?: FilterCriteria<T>;
      sort?: OrderCriteria<T>;
      projection?: ProjectionCriteria<T>;
      page?: number;
      perPage?: number;
    },
    opts: Record<string, unknown>,
  ): Promise<ListResponse<T>>;

  findById(id: ID, opts: Record<string, unknown>): Promise<T>;
  findOneByAndCriteria(searchCriteria: FilterCriteria<T>, opts: Record<string, unknown>): Promise<T>;
  findByAndCriteria(searchCriteria: FilterCriteria<T>, opts: Record<string, unknown>): Promise<T[]>;
  findByOrCriteria(searchCriteria: FilterCriteria<T>, opts: Record<string, unknown>): Promise<T[]>;

  update<K extends keyof T>(
    payload: {
      filter: Pick<FilterCriteria<T>, K>;
      dataToUpdate: Partial<Omit<T, K>>;
    },
    opts: Record<string, unknown>,
  ): Promise<number>;

  delete(deleteCriteria: FilterCriteria<T>, opts: Record<string, unknown>): Promise<number>;

  getRelatedEntity<V>(id: ID, fieldName: keyof T, opts: Record<string, unknown>): Promise<V>;
  getRelatedEntities<V>(id: ID, fieldName: keyof T, opts: Record<string, unknown>): Promise<V[]>;
}
