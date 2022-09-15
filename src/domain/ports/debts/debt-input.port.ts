import { ID, IDebt, IHousehold } from '../..';
import { IDebtDto } from '..';

export interface DebtInputPort {
  getDebtsList(owner: IHousehold): Promise<IDebt[]>;
  getDebtDetails(id: ID): Promise<IDebt>;
  addDebt(payload: IDebtDto): Promise<IDebt>;
  editDebt(id: ID, payload: IDebtDto): Promise<IDebt>;
  deleteDebt(id: ID): Promise<IDebt>;
}
