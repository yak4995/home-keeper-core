import { IAnalyticComparisonDto, OutputPort } from '..';
import { CustomGeneralType } from '../..';

export interface StockAnalyticOutputPort
  extends OutputPort<{
    getStockTransactionsCount: [number, CustomGeneralType];
    getStockTransactionsSum: [number, CustomGeneralType];
    getStockRatio: [IAnalyticComparisonDto, CustomGeneralType];
    getStockChange: [IAnalyticComparisonDto, CustomGeneralType];
  }> {}
