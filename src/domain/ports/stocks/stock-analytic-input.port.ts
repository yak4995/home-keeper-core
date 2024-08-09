import { IStockAnalyticDto, InputPort } from '..';
import { CustomGeneralType } from '../..';

export interface StockAnalyticInputPort
  extends InputPort<{
    getStockTransactionsCount: [IStockAnalyticDto, CustomGeneralType];
    getStockTransactionsSum: [IStockAnalyticDto, CustomGeneralType];
    getStockRatio: [IStockAnalyticDto, CustomGeneralType];
    getStockChange: [IStockAnalyticDto, CustomGeneralType];
  }> {}
