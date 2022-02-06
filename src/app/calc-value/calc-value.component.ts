import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CalcService } from '../../api/calc/calc.service';
import { Value } from './voes/value';

@Component({
  selector: 'app-calc-value',
  templateUrl: './calc-value.component.html',
  styleUrls: ['./calc-value.component.scss']
})
export class CalcValueComponent {
  @Input('title') titleName: string = '企業価値の計算';
  public isInputFlg: boolean = true;

  public netIncome = new FormControl();
  public depreciation = new FormControl('');
  public capitalInvestment = new FormControl('');
  public roic = new FormControl('');

  public values: Value[] = [];
  public fileArray: string[] = [];

  private ownerIncome!:number;
  private file: File | null = null;


  constructor(private router: Router, private calcService: CalcService) { }

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

  /**
   * テンプレートのファイルアップ画面と入力画面の切り替えを司るメソッド
   */
  public changeView():void {
    this.isInputFlg = !this.isInputFlg;
  }

  /**
   * 
   * @param event ファイルアップロード時に発動
   * @returns 
   */
  public importFile(event: Event): void {
    
  }

}