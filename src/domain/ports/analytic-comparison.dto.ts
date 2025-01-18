export interface IAnalyticComparisonDto {
  // key is direct child categoryId for ratio and is date for change
  // number[] will be two numbers - value itself and % in comparison (sum for ratio and change in % in comparison with previous period for change
  [key: string]: [number, number];
}
