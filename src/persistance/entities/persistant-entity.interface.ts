import { ID } from '../..';

export interface IPersistantEntity {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
}
