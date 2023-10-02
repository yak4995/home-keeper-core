import { EstimationInputPort } from '../..';

export interface EstimationOutputPort {
  getEstimations<R>(output: Awaited<ReturnType<EstimationInputPort['getEstimations']>>, exception: unknown): Promise<R>;
  getEstimationDetails<R>(
    output: Awaited<ReturnType<EstimationInputPort['getEstimationDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addEstimation<R>(output: Awaited<ReturnType<EstimationInputPort['addEstimation']>>, exception: unknown): Promise<R>;
  editEstimation<R>(output: Awaited<ReturnType<EstimationInputPort['editEstimation']>>, exception: unknown): Promise<R>;
  addEstimationItem<R>(
    output: Awaited<ReturnType<EstimationInputPort['addEstimationItem']>>,
    exception: unknown,
  ): Promise<R>;
  editEstimationItem<R>(
    output: Awaited<ReturnType<EstimationInputPort['editEstimationItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteEstimationItem<R>(
    output: Awaited<ReturnType<EstimationInputPort['deleteEstimationItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteEstimation<R>(
    output: Awaited<ReturnType<EstimationInputPort['deleteEstimation']>>,
    exception: unknown,
  ): Promise<R>;
}
