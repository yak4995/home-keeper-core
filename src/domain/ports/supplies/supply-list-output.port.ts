import { SupplyListInputPort } from '../..';

export interface SupplyListOutputPort {
  getSupplyLists<R>(output: Awaited<ReturnType<SupplyListInputPort['getSupplyLists']>>, exception: unknown): Promise<R>;
  getSupplyListDetails<R>(
    output: Awaited<ReturnType<SupplyListInputPort['getSupplyListDetails']>>,
    exception: unknown,
  ): Promise<R>;
  addSupplyListItem<R>(
    output: Awaited<ReturnType<SupplyListInputPort['addSupplyListItem']>>,
    exception: unknown,
  ): Promise<R>;
  editSupplyListItem<R>(
    output: Awaited<ReturnType<SupplyListInputPort['editSupplyListItem']>>,
    exception: unknown,
  ): Promise<R>;
  deleteSupplyListItem<R>(
    output: Awaited<ReturnType<SupplyListInputPort['deleteSupplyListItem']>>,
    exception: unknown,
  ): Promise<R>;
}
