import { IEstimationDto, IEstimationItemDto, InputPort } from '..';
import { ID, IEstimationProject, IEstimationProjectItem, IHousehold } from '../..';

export interface EstimationInputPort
  extends InputPort<
    | 'getEstimations'
    | 'getEstimationDetails'
    | 'addEstimation'
    | 'editEstimation'
    | 'addEstimationItem'
    | 'editEstimationItem'
    | 'deleteEstimationItem'
    | 'deleteEstimation'
  > {
  getEstimations(owner: IHousehold, from: Date, to: Date): Promise<IEstimationProject[]>;
  getEstimationDetails(id: ID): Promise<IEstimationProject>;
  addEstimation(payload: IEstimationDto): Promise<IEstimationProject>;
  editEstimation(id: ID, payload: IEstimationDto): Promise<IEstimationProject>;
  addEstimationItem(estimationId: ID, payload: IEstimationItemDto): Promise<IEstimationProjectItem>;
  editEstimationItem(id: ID, payload: IEstimationItemDto): Promise<IEstimationProjectItem>;
  deleteEstimationItem(id: ID): Promise<IEstimationProjectItem>;
  deleteEstimation(id: ID): Promise<IEstimationProject>;
}
