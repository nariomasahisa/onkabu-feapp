import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcValueWebService {

  constructor(
    private http: HttpClient
  ) {}

  public nonGrowth(income) {
    const path = 'http://localhost:3000/value/non';
    return this.http.post<any>(path, income).toPromise();
  }

  public lowGrowth(income) {
    const path = 'http://localhost:3000/value/low';
    return this.http.post<any>(path, income).toPromise();
  }

  public middleGrowth(income) {
    const path = 'http://localhost:3000/value/middle';
    return this.http.post<any>(path, income).toPromise();
  }

  public highGrowth(income) {
    const path = 'http://localhost:3000/value/high';
    return this.http.post<any>(path, income).toPromise(); 
  }

}
