import { OutputPort } from '..';
import { ITax } from '../..';

export interface TaxOutputPort
  extends OutputPort<{
    getTaxesList: [ITax[], object];
    getTaxDetail: [ITax, object];

    createTax: [ITax, object];
    updateTax: [ITax, object];
    deleteTax: [ITax, object];
  }> {}
