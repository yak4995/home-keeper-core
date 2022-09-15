import { ID } from '../../..';
import { IReportDefinitionDto } from '../..';

export interface ITaxesReportDefinitionDto extends IReportDefinitionDto {
  taxId: ID;
}
