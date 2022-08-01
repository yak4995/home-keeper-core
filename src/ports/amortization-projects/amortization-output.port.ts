import { IAmortizationProject, IBudget, IConsumedResourceItem, IMaintenanceItem } from '@persistance';

export interface AmortizationOutputPort {
  getAmortizations(output: IAmortizationProject): Promise<any>;
  getAmortizationDetails(output: IAmortizationProject): Promise<any>;
  addAmortization(output: IAmortizationProject): Promise<any>;
  editAmortization(output: IBudget): Promise<any>;
  addMaintenanceItem(output: IMaintenanceItem): Promise<any>;
  editMaintenanceItem(output: IMaintenanceItem): Promise<any>;
  deleteMaintenanceItem(output: IMaintenanceItem): Promise<any>;
  addConsumedResourceItem(output: IConsumedResourceItem): Promise<any>;
  editConsumedResourceItem(output: IConsumedResourceItem): Promise<any>;
  deleteConsumedResourceItem(output: IConsumedResourceItem): Promise<any>;
  deleteAmortization(output: IAmortizationProject): Promise<any>;
}
