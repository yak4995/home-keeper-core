import { ID } from '@persistance';

export interface IPersistantEntity {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
}
