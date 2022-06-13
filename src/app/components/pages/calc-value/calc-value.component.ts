import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CalcValueService } from 'src/app/services/calc-value/calc-value.service';
import { CalcService } from '../../../services/calc/calc.service';
import { CalcValueRequest, CalcValueResponse, Value } from './voes/value';

@Component({
  selector: 'app-calc-value',
  templateUrl: './calc-value.component.html',
  styleUrls: ['./calc-value.component.scss']
})
export class CalcValueComponent {

  public isInputFlg: boolean = true;
  @Input('title') titleName: string = '企業価値の計算';
  public netIncome = new FormControl();
  public depreciation = new FormControl('');
  public capitalInvestment = new FormControl('');
  public roic = new FormControl('');

  public values: Value[] = [];
  public fileArray: string[] = [];

  private ownerIncome!:number;
  private file: File | null = null;

  private value: CalcValueRequest = {
    stockHolderProfit: Number(this.netIncome),
    depreciation: Number(this.depreciation),    
    capitalInvestment: Number(this.capitalInvestment),
    roic: Number(this.roic)
  }

  public valueResponse: CalcValueResponse = {
    presentValue: 0,
    excessReturn: 0,
    costOfCapital: 0,
    // rowGrowthPresentValue: 0,
    // rowGrowthExcessReturn: 0,
    // rowGrowthCostOfCapital: 0,
    // middleGrowthPresentValue: 0,
    // middleGrowthExcessReturn: 0,
    // middleGrowthCostOfCapital: 0,
    // highGrowthPresentValue: 0,
    // highGrowthExcessReturn: 0,
    // highGrowthCostOfCapital: 0
  }



  constructor(private router: Router, private calcService: CalcService, private calcValueService: CalcValueService) { }

  /**
   * input画面での企業価値を計算するメソッド
   * @returns 企業価値を返す(数値型)
   */
  public calcStockValue() {
    this.values = [];
    this.ownerIncome = Number(this.netIncome.value) + Number(this.depreciation.value) - Number(this.capitalInvestment.value);
    // calcServiceへ値を渡す
    return this.calcService.inputData(this.roic.value / 100, this.ownerIncome).then((values) => {
      this.values = values
    });
  }

  public calcCompanyValue() {
    this.calcValueService.calcValue(this.value)
      .subscribe((res: CalcValueResponse) => this.valueResponse = {
      presentValue: res.presentValue,
      excessReturn: res.excessReturn,
      costOfCapital: res.costOfCapital
    })
    debugger
    console.log(this.valueResponse)
    return this.valueResponse
  }

  /**
   * テンプレートのファイルアップ画面と入力画面の切り替えを司るメソッド
   */
    public changeView():void {
    this.isInputFlg = !this.isInputFlg;
  }
}