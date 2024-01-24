import { OutputPort, TaxInputPort } from '../..';

export interface TaxOutputPort
  extends OutputPort<'getTaxesList' | 'getTaxDetail' | 'addTax' | 'editTax' | 'deleteTax', TaxInputPort> {}
