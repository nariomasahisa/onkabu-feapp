import { Injectable } from '@angular/core';
import { Value } from 'src/app/components/pages/calc-value/voes/value';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  public wacc = 0.085;
  public non: Value = {
    per: '0%',
    overReturnPV: 0,
    investCostPV: 0,
    PV: 0
  }
  public low: Value = {
    per: '5%',
    overReturnPV: 0,
    investCostPV: 0,
    PV: 0
  }
  public middle: Value = {
    per: '10%',
    overReturnPV: 0,
    investCostPV: 0,
    PV: 0
  }
  public high: Value = {
    per: '15%',
    overReturnPV: 0,
    investCostPV: 0,
    PV: 0
  }
  public values: Value[] = [];

  constructor() { }

  /** コンポーネントからの入力を渡す */
  inputData(roic: number, income: number): Promise<Value[]> {
    return new Promise((resolve) => {
      this.values = []
      this.nonGrowth(roic, income);
      this.lowGrowth(roic, income);
      this.middleGrowth(roic, income);
      this.highGrowth(roic, income);
      resolve(this.values)
    })
  }

  nonGrowth(roic:number, income: number): void {
    this.non.investCostPV = this.investReturnNowValue(roic, income, 1);
    this.non.overReturnPV = this.overReturnNowValue(roic, income, 1);
    this.non.PV = Math.round(this.non.overReturnPV + this.non.investCostPV);
    this.values.push(this.non);
  }

  lowGrowth(roic:number, income: number): void {
    this.low.overReturnPV = this.overReturnNowValue(roic, income, 1.05);
    this.low.investCostPV = this.investReturnNowValue(roic, income, 1.05);
    this.low.PV = Math.round(this.low.overReturnPV + this.low.investCostPV);
    this.values.push(this.low);
  }

  middleGrowth(roic:number, income: number): void {
    this.middle.overReturnPV = this.overReturnNowValue(roic, income, 1.1);
    this.middle.investCostPV = this.investReturnNowValue(roic, income, 1.1);
    this.middle.PV = Math.round(this.middle.overReturnPV + this.middle.investCostPV);
    this.values.push(this.middle);
  }

  highGrowth(roic:number, income: number): void {
    this.high.overReturnPV = this.overReturnNowValue(roic, income, 1.15);
    this.high.investCostPV = this.investReturnNowValue(roic, income, 1.15);
    this.high.PV = Math.round(this.high.overReturnPV + this.high.investCostPV);
    this.values.push(this.high);
  }



  // 超過リターンのPV
  overReturnNowValue(roic: number, income: number, rate: number): number {

    const over = roic - this.wacc;
    const investing = Number(income) / roic;
    const overIncome = investing * over;
    return this.forMethod(overIncome, rate);
  }

  // 資本費用のPV
  investReturnNowValue(roic: number, income: number, rate: number): number {
    const investing = Number(income) / roic;
    const investCost = investing * this.wacc;
    return this.forMethod(investCost, rate);
  }



  forMethod = (input: number, rate: number): number => {
    let result = 0;
    let presentValue = 0;
    for (let i = 1; i < 11; i++) {
      presentValue += input * rate / ((1 + this.wacc) ** i);
    }
    const terminalValue = (input / this.wacc) / ((1 + this.wacc) ** 10);
    result = Math.round(presentValue + terminalValue);
    return result;
  }
}
