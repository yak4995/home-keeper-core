import { IPersistantEntity, OrderCriteria, Criteria, ID } from '../..';

// Probably children: TypeOrmRepository<T>, MongoRepository<T>, XmlRepository<T>
export interface IRepository<T extends IPersistantEntity> {
  insert(entity: T): Promise<T>;
  findAll(page: number, perPage: number, sort: OrderCriteria<T>, filter: Criteria<T>): Promise<T[]>;
  findById(id: ID): Promise<T>;
  findOneByAndCriteria(searchCriteria: Criteria<T>): Promise<T>;
  findByAndCriteria(searchCriteria: Criteria<T>): Promise<T[]>;
  findByOrCriteria(searchCriteria: Criteria<T>): Promise<T[]>;
  update(updateData: Criteria<T>, id: ID): Promise<any>;
  delete(deleteCriteria: Criteria<T>): Promise<any>;
  getRelatedEntity<V>(id: ID, fieldName: keyof T): Promise<V>;
  getRelatedEntities<V>(id: ID, fieldName: keyof T): Promise<V[]>;
}
