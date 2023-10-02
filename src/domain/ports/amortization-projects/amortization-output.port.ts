import { AmortizationInputPort } from '../..';

export interface AmortizationOutputPort {
  getAmortizations<R>(
    output: Awaited<ReturnType<AmortizationInputPort['getAmortizations']>>,
    exception: unknown,
  ): Promise<R>;
  getAmortizationDetails<R>(
    output: Awaited<ReturnType<AmortizationInputPort['getAmortizationDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addAmortization<R>(
    output: Awaited<ReturnType<AmortizationInputPort['addAmortization']>>,
    exception: unknown,
  ): Promise<R>;
  editAmortization<R>(
    output: Awaited<ReturnType<AmortizationInputPort['editAmortization']>>,
    exception: unknown,
  ): Promise<R>;
  addMaintenanceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['addMaintenanceItem']>>,
    exception: unknown,
  ): Promise<R>;
  editMaintenanceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['editMaintenanceItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteMaintenanceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['deleteMaintenanceItem']>>,
    exception: unknown,
  ): Promise<R>;
  addConsumedResourceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['addConsumedResourceItem']>>,
    exception: unknown,
  ): Promise<R>;
  editConsumedResourceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['editConsumedResourceItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteConsumedResourceItem<R>(
    output: Awaited<ReturnType<AmortizationInputPort['deleteConsumedResourceItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteAmortization<R>(
    output: Awaited<ReturnType<AmortizationInputPort['deleteAmortization']>>,
    exception: unknown,
  ): Promise<R>;
}
