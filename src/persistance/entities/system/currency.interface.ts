import { IPersistantEntity } from 'persistance';

export interface ICurrency extends IPersistantEntity {
  name: string;
  code: string;
}
