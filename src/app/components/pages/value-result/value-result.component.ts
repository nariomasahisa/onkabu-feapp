import { Component, Input, OnInit } from '@angular/core';
import { CalcService } from '../../../services/calc/calc.service';

@Component({
  selector: 'app-value-result',
  templateUrl: './value-result.component.html',
  styleUrls: ['./value-result.component.scss']
})
export class ValueResultComponent implements OnInit {

  public result:number = 0;

  constructor(private calc: CalcService) {}

  ngOnInit(): void {
  }

}
