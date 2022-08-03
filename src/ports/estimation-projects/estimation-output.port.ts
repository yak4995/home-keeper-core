import { IEstimationProject, IEstimationProjectItem } from 'persistance';

export interface EstimationOutputPort {
  getEstimations(output: IEstimationProject[]): Promise<any>;
  getEstimationDetails(output: IEstimationProject): Promise<any>;
  addEstimation(output: IEstimationProject): Promise<any>;
  editEstimation(output: IEstimationProject): Promise<any>;
  addEstimationItem(output: IEstimationProjectItem): Promise<any>;
  editEstimationItem(output: IEstimationProjectItem): Promise<any>;
  deleteEstimationItem(output: IEstimationProjectItem): Promise<any>;
  deleteEstimation(output: IEstimationProject): Promise<any>;
}
