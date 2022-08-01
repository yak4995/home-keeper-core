import { IPersistantEntity } from '@persistance';

export interface ITimezone extends IPersistantEntity {
  name: string;
  shift: string;
}
