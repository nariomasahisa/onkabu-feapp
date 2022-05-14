import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';
import { MOCKDATA } from '../look-through/datas';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  data: any = ''

  public displayedColumns: string[] = [
    'code',
    'name',
    'stock',
    'eps',
    'bps',
    'devidend',
    'buyPrice',
    'totalProfit',
    'bookValue',
    'totalBuyPrice',
    'profitYield',
    'roe',
    'per',
    'pbr'
  ];

  public dataSource = [...MOCKDATA];

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData();
  }

  toCreate(): void {
    
  }

}
