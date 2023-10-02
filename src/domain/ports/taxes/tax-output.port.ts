import { TaxInputPort } from '../..';

export interface TaxOutputPort {
  getTaxesList<R>(output: Awaited<ReturnType<TaxInputPort['getTaxesList']>>, exception: unknown): Promise<R>;
  getTaxDetail<R>(output: Awaited<ReturnType<TaxInputPort['getTaxDetail']>>, exception: unknown): Promise<R>;
  addTax<R>(output: Awaited<ReturnType<TaxInputPort['addTax']>>, exception: unknown): Promise<R>;
  editTax<R>(output: Awaited<ReturnType<TaxInputPort['editTax']>>, exception: unknown): Promise<R>;
  deleteTax<R>(output: Awaited<ReturnType<TaxInputPort['deleteTax']>>, exception: unknown): Promise<R>;
}
