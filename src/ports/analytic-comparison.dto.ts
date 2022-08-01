export interface IAnalyticComparisonDto {
  // number[] will be two numbers - value and % in comparison
  // with sum for ratio \ value and
  // change in % in comparison with previous period for change
  [key: string]: [number, number];
}
