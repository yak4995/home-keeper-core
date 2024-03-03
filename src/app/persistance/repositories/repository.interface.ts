import { IPersistantEntity, OrderCriteria, Criteria, ID } from '../../../domain';

// Probably children: TypeOrmRepository<T>, MongoRepository<T>, XmlRepository<T>
export interface IRepository<T extends IPersistantEntity> {
  insert(entity: T): Promise<T>;
  findAll(filter: Criteria<T>, sort?: OrderCriteria<T>, page?: number, perPage?: number): Promise<T[]>;
  findById(id: ID): Promise<T>;
  findOneByAndCriteria(searchCriteria: Criteria<T>): Promise<T>;
  findByAndCriteria(searchCriteria: Criteria<T>): Promise<T[]>;
  findByOrCriteria(searchCriteria: Criteria<T>): Promise<T[]>;
  update(updateData: Criteria<T>, id: ID): Promise<T>;
  delete(deleteCriteria: Criteria<T>): Promise<T[]>;
  getRelatedEntity<V>(id: ID, fieldName: keyof T): Promise<V>;
  getRelatedEntities<V>(id: ID, fieldName: keyof T): Promise<V[]>;
}
