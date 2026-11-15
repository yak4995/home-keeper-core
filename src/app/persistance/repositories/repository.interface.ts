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

  upsert(entity: T, opts: Record<string, unknown>): Promise<T>;
  upsertMany(entities: T[], opts: Record<string, unknown>): Promise<number>;

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

  findById(payload: { id: ID; projection: ProjectionCriteria<T> }, opts: Record<string, unknown>): Promise<T>;
  findOneByAndCriteria(
    payload: {
      searchCriteria: FilterCriteria<T>;
      projection: ProjectionCriteria<T>;
    },
    opts: Record<string, unknown>,
  ): Promise<T>;
  findByAndCriteria(
    payload: {
      searchCriteria: FilterCriteria<T>;
      projection: ProjectionCriteria<T>;
    },
    opts: Record<string, unknown>,
  ): Promise<T[]>;
  findByOrCriteria(
    payload: {
      searchCriteria: FilterCriteria<T>;
      projection: ProjectionCriteria<T>;
    },
    opts: Record<string, unknown>,
  ): Promise<T[]>;

  update<K extends keyof T>(
    payload: {
      filter: Pick<FilterCriteria<T>, K>;
      dataToUpdate: Partial<Omit<T, K>>;
    },
    opts: Record<string, unknown>,
  ): Promise<number>;

  delete(deleteCriteria: FilterCriteria<T>, opts: Record<string, unknown>): Promise<number>;

  addRelatedEntities(target: T, projection: ProjectionCriteria<T>, opts: Record<string, unknown>): Promise<T>;

  mapRelatedEntities(target: T[], projection: ProjectionCriteria<T>, opts: Record<string, unknown>): Promise<T[]>;
}
