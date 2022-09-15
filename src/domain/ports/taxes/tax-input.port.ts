import { ID, ITax } from '../..';
import { ITaxDto } from '..';

export interface TaxInputPort {
  getTaxesList(ownerId: ID): Promise<ITax[]>;
  getTaxDetail(id: ID): Promise<ITax>;
  addTax(payload: ITaxDto): Promise<ITax>;
  editTax(id: ID, payload: ITaxDto): Promise<ITax>;
  deleteTax(id: ID): Promise<ITax>;
}
