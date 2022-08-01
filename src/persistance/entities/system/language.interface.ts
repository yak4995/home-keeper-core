import { IPersistantEntity } from '@persistance';

export interface ILanguage extends IPersistantEntity {
  name: string;
  code: string;
}
