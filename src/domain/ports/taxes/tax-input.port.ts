import { ITaxDto, InputPort } from '..';
import { ID, ITax } from '../..';

export interface TaxInputPort extends InputPort<'getTaxesList' | 'getTaxDetail' | 'addTax' | 'editTax' | 'deleteTax'> {
  getTaxesList(ownerId: ID): Promise<ITax[]>;
  getTaxDetail(id: ID): Promise<ITax>;
  addTax(payload: ITaxDto): Promise<ITax>;
  editTax(id: ID, payload: ITaxDto): Promise<ITax>;
  deleteTax(id: ID): Promise<ITax>;
}
