import { Injectable } from '@angular/core';
import { ICompany } from 'src/app/voes/i-company';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolioData(): void {
    console.log('get datas')
  }
}
