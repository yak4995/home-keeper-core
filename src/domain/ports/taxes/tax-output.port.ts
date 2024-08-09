import { OutputPort } from '..';
import { CustomGeneralType, ITax } from '../..';

export interface TaxOutputPort
  extends OutputPort<{
    getTaxesList: [ITax[], CustomGeneralType];
    getTaxDetail: [ITax, CustomGeneralType];

    createTax: [ITax, CustomGeneralType];
    updateTax: [ITax, CustomGeneralType];
    deleteTax: [ITax, CustomGeneralType];
  }> {}
