import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICompany } from 'src/app/voes/i-company';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.scss']
})
export class PortfolioCreateComponent implements OnInit {

  form: FormGroup = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    stock: [0, [Validators.min(1), Validators.required]],
    eps: [0, [Validators.required]],
    bps: [0, [Validators.min(1),Validators.required]],
    devidend: [0, [Validators.required]],
    buyPrice: [0, [Validators.min(1),Validators.required]],
  })
  id: string = '';
  totalProfit: number = 0;
  bookValue: number = 0;
  totalBuyPrice: number = 0;
  profitYield: number = 0;
  roe: number = 0;
  per: number = 0;
  pbr: number = 0;
  uid: string = '';

  stockArray: ICompany[] = []

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {

  }
  save(): void {
    console.log('saved')
  }
  add(): void {
    if (this.stockArray.length === 0) {
      this.stockArray.push(this.generateData())
    } else {
      const findCode = this.stockArray.find(data => data.code === this.generateData().code)
      if (findCode === undefined) {
        this.stockArray.push(this.generateData())        
      } else {
        alert('同じ銘柄は再度登録できません')
      }
    }
    
  }
  get isFormValid(): boolean {
    return this.form.status === 'VALID';
  }

  get isSameStock(): boolean {
    const findCode = this.stockArray.find(data => data.code === this.generateData().code)
    if (findCode !== undefined) {
      return true;
    }
    return false
  }

  generateData(): ICompany {
    this.id = 'hoge'
    this.totalProfit = this.form.controls.bps.value * this.form.controls.stock.value
    this.bookValue = this.form.controls.bps.value * this.form.controls.stock.value
    this.totalBuyPrice = this.form.controls.buyPrice.value * this.form.controls.stock.value
    this.profitYield = this.form.controls.eps.value / this.form.controls.buyPrice.value
    this.roe = this.form.controls.eps.value / this.form.controls.bps.value
    this.per = this.form.controls.buyPrice.value / this.form.controls.eps.value
    this.pbr = this.form.controls.buyPrice.value / this.form.controls.bps.value
    this.uid = 'dummyId'
    return {
      id: this.id,
      code: this.form.controls.code.value,
      name: this.form.controls.name.value,
      stocks: this.form.controls.stock.value,
      eps: this.form.controls.eps.value,
      bps: this.form.controls.bps.value,
      devidend: this.form.controls.devidend.value,
      buyPrice: this.form.controls.buyPrice.value,
      totalProfit: this.totalProfit,
      bookValue: this.bookValue,
      totalBuyPrice: this.totalBuyPrice,
      profitYield: this.profitYield,
      roe: this.roe,
      per: this.per,
      pbr: this.pbr,
      uid: this.uid
    }
  }
}
