import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupName } from "@angular/forms";
import { MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY } from '@angular/material/checkbox';
import { OnkabuService } from 'src/api/onkabu/onkabu.service';

@Component({
  selector: 'app-onkabu',
  templateUrl: './onkabu.component.html',
  styleUrls: ['./onkabu.component.css']
})
export class OnkabuComponent implements OnInit {

  public buyPrice!: number;
  public nowPrice!: number;
  public stocks!: number;
  public profit!: number;
  public onkabu!: string;


  constructor(
    private onkabuService: OnkabuService
  ) { }

  ngOnInit(): void {
    this.profit = this.nowPrice - this.buyPrice
  }
  public calcOnkabu(): Promise<string>{
    return this.onkabuService.onkabuCalc(this.buyPrice, this.nowPrice, this.stocks).then((res) => {
      this.onkabu = res
      return this.onkabu;
    })
  }
}
