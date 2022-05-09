import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from 'src/app/voes/i-company';
import { PortfolioWebService } from '../portfolio-web.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private portfolioWebService: PortfolioWebService
  ) { }

  getPortfolioData() {
    return this.portfolioWebService.getOnkabu().subscribe({
      next(res: any) {
        return console.log(res.text);
      },
      error(err: any){
        return console.error(err);
      }
    })
  }
}
