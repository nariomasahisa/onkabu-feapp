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
  @Input('title') titleName: string = '企業価値の計算'

  public stockCode = new FormControl('');
  public stockName = new FormControl('');
  public ownerIncome = new FormControl('');
  public roic = new FormControl('');

  public values: Value[] = [];

  constructor(private router: Router, private calcService: CalcService) { }

  public calcStockValue() {
    this.values = [];
    this.calcService.inputData(this.roic.value / 100, this.ownerIncome.value)
    this.values = this.calcService.values
    return this.values;
  }

}
``