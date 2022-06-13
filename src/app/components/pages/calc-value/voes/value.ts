export interface Value {
  per: string;
  overReturnPV: number;
  investCostPV: number;
  PV: number;
}

export interface CalcValueRequest {
  stockHolderProfit: number;
  depreciation: number;
  capitalInvestment: number;
  roic: number;
}

export interface CalcValueResponse {
  presentValue: number;
  excessReturn: number;
  costOfCapital: number;
//   rowGrowthPresentValue: number;
//   rowGrowthExcessReturn: number;
//   rowGrowthCostOfCapital: number;
//   middleGrowthPresentValue: number;
//   middleGrowthExcessReturn: number;
//   middleGrowthCostOfCapital: number;
//   highGrowthPresentValue: number;
//   highGrowthExcessReturn: number;
//   highGrowthCostOfCapital: number;
}