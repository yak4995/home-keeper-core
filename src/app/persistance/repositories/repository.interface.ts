import { IPersistantEntity, OrderCriteria, Criteria, ID } from '../../../domain';

// Probably children: TypeOrmRepository<T>, MongoRepository<T>, XmlRepository<T>
export interface IRepository<T extends IPersistantEntity> {
  insert(entity: T, opts: Record<string, unknown>): Promise<T>;
  findAll(
    payload: {
      filter?: Criteria<T>;
      sort?: OrderCriteria<T>;
      page?: number;
      perPage?: number;
    },
    opts: Record<string, unknown>,
  ): Promise<T[]>;
  findById(id: ID, opts: Record<string, unknown>): Promise<T>;
  findOneByAndCriteria(searchCriteria: Criteria<T>, opts: Record<string, unknown>): Promise<T>;
  findByAndCriteria(searchCriteria: Criteria<T>, opts: Record<string, unknown>): Promise<T[]>;
  findByOrCriteria(searchCriteria: Criteria<T>, opts: Record<string, unknown>): Promise<T[]>;
  update(updateData: Criteria<T>, opts: Record<string, unknown>): Promise<T>;
  delete(deleteCriteria: Criteria<T>, opts: Record<string, unknown>): Promise<T[]>;
  getRelatedEntity<V>(id: ID, fieldName: keyof T, opts: Record<string, unknown>): Promise<V>;
  getRelatedEntities<V>(id: ID, fieldName: keyof T, opts: Record<string, unknown>): Promise<V[]>;
}
