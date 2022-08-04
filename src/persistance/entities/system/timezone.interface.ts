import { IPersistantEntity } from '../..';

export interface ITimezone extends IPersistantEntity {
  name: string;
  shift: string;
}
