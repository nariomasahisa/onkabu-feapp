import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/voes/i-company';

@Component({
  selector: 'app-portfolio-create',
  templateUrl: './portfolio-create.component.html',
  styleUrls: ['./portfolio-create.component.scss']
})
export class PortfolioCreateComponent implements OnInit {

  id!: string;
  code!: string;
  name!: string;
  stock!: number;
  eps!: number;
  bps!: number;
  devidend!: number;
  buyPrice!: number;

  totalProfit!: number;
  bookValue!: number;
  totalBuyPrice!: number;
  profitYield!: number;
  roe!:number;
  per!:number;
  pbr!:number;
  uid!: string;

  stockArray: ICompany[] = []

  constructor() { }

  ngOnInit(): void {

  }
  save(): void {
    console.log('saved')
  }
  add(): void {
    this.stockArray.push(this.generateData())
    console.log(this.stockArray)
  }
  generateData(): ICompany {
    this.id = 'hoge'
    this.totalProfit = this.eps * this.stock
    this.bookValue = this.bps * this.stock
    this.totalBuyPrice = this.buyPrice * this.stock
    this.profitYield = this.eps / this.buyPrice
    this.roe = this.eps / this.bps
    this.per = this.buyPrice / this.eps
    this.pbr = this.buyPrice / this.bps
    this.uid = 'dummyId'
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      stocks: this.stock,
      eps: this.eps,
      bps: this.bps,
      devidend: this.devidend,
      buyPrice: this.buyPrice,
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
