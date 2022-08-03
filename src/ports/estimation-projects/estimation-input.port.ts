import { ID, IEstimationProject, IEstimationProjectItem, IHousehold } from 'persistance';
import { IEstimationDto, IEstimationItemDto } from 'ports';

export interface EstimationInputPort {
  getEstimations(owner: IHousehold, from: Date, to: Date): Promise<IEstimationProject[]>;
  getEstimationDetails(id: ID): Promise<IEstimationProject>;
  addEstimation(payload: IEstimationDto): Promise<IEstimationProject>;
  editEstimation(id: ID, payload: IEstimationDto): Promise<IEstimationProject>;
  addEstimationItem(estimationId: ID, payload: IEstimationItemDto): Promise<IEstimationProjectItem>;
  editEstimationItem(id: ID, payload: IEstimationItemDto): Promise<IEstimationProjectItem>;
  deleteEstimationItem(id: ID): Promise<IEstimationProjectItem>;
  deleteEstimation(id: ID): Promise<IEstimationProject>;
}
