import { OutputPort } from '..';
import { ITax, ListResponse } from '../..';

export interface TaxOutputPort
  extends OutputPort<{
    getTaxesList: [ListResponse<ITax>, object];
    getTaxDetail: [ITax, object];

    createTax: [ITax, object];
    updateTax: [ITax, object];
    deleteTax: [ITax, object];
  }> {}
