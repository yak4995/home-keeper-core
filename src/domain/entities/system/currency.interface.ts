import { IPersistantEntity } from '..';

export interface ICurrency extends IPersistantEntity {
  name: string;
  code: string;
}
