import { IDebt } from '@persistance';

export interface DebtOutputPort {
  getDebtsList(output: IDebt[]): Promise<any>;
  getDebtDetails(output: IDebt): Promise<any>;
  addDebt(output: IDebt): Promise<any>;
  editDebt(output: IDebt): Promise<any>;
  deleteDebt(output: IDebt): Promise<any>;
}
