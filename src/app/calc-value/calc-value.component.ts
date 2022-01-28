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

  public stockCode = new FormControl('');
  public stockName = new FormControl('');
  public ownerIncome = new FormControl('');
  public roic = new FormControl('');
  public values: Value[] = [];

  private file: File | null = null;

  constructor(private router: Router, private calcService: CalcService) { }

  /**
   * input画面での企業価値を計算するメソッド
   * @returns 企業価値を返す(数値型)
   */
  public calcStockValue() {
    this.values = [];
    // calcServiceへ値を渡す
    this.calcService.inputData(this.roic.value / 100, this.ownerIncome.value)
    this.values = this.calcService.values
    return this.values;
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
    
    const files: FileList = (event.target as any).files;
    if (files.length === 0) {
      return
    }
  }

  
  public get filename() : string {
    if (this.file !== null) {
      return this.file.name
    }
    return '';
  }
  

}