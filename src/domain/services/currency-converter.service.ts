export interface CurrencyConverterService {
  getRateFor(codeFrom: string, codeTo: string, forDate: Date): Promise<number>;
}
