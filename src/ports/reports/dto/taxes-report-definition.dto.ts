import { ID } from 'persistance';
import { IReportDefinitionDto } from 'ports';

export interface ITaxesReportDefinitionDto extends IReportDefinitionDto {
  taxId: ID;
}
