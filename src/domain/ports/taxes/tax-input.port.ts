import { IIdentificationDto, ITaxDto, InputPort } from '..';
import { ID } from '../..';

export interface TaxInputPort
  extends InputPort<{
    getTaxesList: [{ ownerId: ID }, object];
    getTaxDetail: [IIdentificationDto, object];

    createTax: [ITaxDto, object];
    updateTax: [IIdentificationDto & ITaxDto, object];
    deleteTax: [IIdentificationDto, object];
  }> {}
