import { ISupplyList, ISupplyListItem } from 'persistance';

export interface SupplyListOutputPort {
  getSupplyLists(output: ISupplyList[]): Promise<any>;
  getSupplyListDetails(output: ISupplyList): Promise<any>;
  addSupplyListItem(output: ISupplyListItem): Promise<any>;
  editSupplyListItem(output: ISupplyListItem): Promise<any>;
  deleteSupplyListItem(output: ISupplyList): Promise<any>;
}
