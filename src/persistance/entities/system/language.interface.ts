import { IPersistantEntity } from '../..';

export interface ILanguage extends IPersistantEntity {
  name: string;
  code: string;
}
