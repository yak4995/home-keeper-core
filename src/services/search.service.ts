import { IPersistantEntity } from '@persistance';

export interface SearchService<T extends IPersistantEntity> {
  insert(entity: T): Promise<boolean>;
  remove(entity: T): Promise<boolean>;
  search(content: string, entityFields: (keyof T)[]): Promise<T[]>;
}
