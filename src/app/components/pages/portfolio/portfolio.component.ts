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
    'name',
    'stock',
    'buyPrice',
    'eps',
    'bps',
    'buyAll',
    'profits',
    'assets'
  ];

  public dataSource = [...MOCKDATA];

  constructor(
    public portfolioService: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioData();
  }

}
