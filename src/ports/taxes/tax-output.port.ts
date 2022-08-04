import { ITax } from '../../persistance';

export interface TaxOutputPort {
  getTaxesList(output: ITax[]): Promise<any>;
  getTaxDetail(output: ITax): Promise<any>;
  addTax(output: ITax): Promise<any>;
  editTax(output: ITax): Promise<any>;
  deleteTax(output: ITax): Promise<any>;
}
