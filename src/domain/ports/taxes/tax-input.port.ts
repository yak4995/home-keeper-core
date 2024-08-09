import { IIdentificationDto, ITaxDto, InputPort } from '..';
import { CustomGeneralType, ID } from '../..';

export interface TaxInputPort
  extends InputPort<{
    getTaxesList: [{ ownerId: ID }, CustomGeneralType];
    getTaxDetail: [IIdentificationDto, CustomGeneralType];

    createTax: [ITaxDto, CustomGeneralType];
    updateTax: [IIdentificationDto & ITaxDto, CustomGeneralType];
    deleteTax: [IIdentificationDto, CustomGeneralType];
  }> {}
